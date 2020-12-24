import { React, useState, useEffect, useContext } from "react";
import { setCulture, setCurrencyCode } from "@syncfusion/ej2-base";
import {
  ViewDirective,
  ViewsDirective,
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { User } from "../context";
import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import network from "../network";
import { loadCldr, L10n } from "@syncfusion/ej2-base";
import * as numberingSystems from "../../node_modules/cldr-data/supplemental/numberingSystems.json";
import * as gregorian from "../../node_modules/cldr-data/main/he/ca-gregorian.json";
import * as numbers from "../../node_modules/cldr-data/main/he/numbers.json";
import * as timeZoneNames from "../../node_modules/cldr-data/main/he/timeZoneNames.json";
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
setCulture("he");
setCurrencyCode("ILS");

// L10n.load({
//   'he': {
//       'schedule': {
//           'saveButton': 'הוסף',
//           'cancelButton': 'סגור',
//           'deleteButton': 'מחק',
//           'newEvent': 'הוסף אירוע',
//       },
//   }
// });
// setLocale('he');

function Calendar() {
  const [calendar, setCalendar] = useState([]);

  const gUser = useContext(User);

  const getAllCalendar = async () => {
    const { data } = await network.get(`/api/calendar`);
    setCalendar(data);
  };

  const onActionComplete = async (e) => {
    console.log(e);
    if (e.requestType === "eventRemoved") {
      const response = await network.delete(`/api/calendar/${e.data[0].Id}`);
      console.log(response);
    }
    if (e.requestType === "eventChanged") {
      const editCalendar = {
        id: e.data[0].Id,
        subject: e.data[0].Subject,
        startTime: e.data[0].StartTime,
        endTime: e.data[0].EndTime,
        userId: gUser.user.userId,
      };
      const response = await network.patch(
        `/api/calendar/${e.data[0].Id}`,
        editCalendar
      );
      console.log(response);
    }
    if (e.requestType === "eventCreated") {
      const newCalendar = {
        id: e.data[0].Id,
        subject: e.data[0].Subject,
        startTime: e.data[0].StartTime,
        endTime: e.data[0].EndTime,
        userId: gUser.user.userId,
      };
      const response = await network.post(`/api/calendar`, newCalendar);
      console.log(response);
    }
  };

  useEffect(() => {
    getAllCalendar();
  }, []);
  return (
    <div>
      {calendar && (
        <>
          <ScheduleComponent
            dateFormat="yyyy/MM/dd"
            locale="he"
            enableRtl={true}
            eventSettings={{ dataSource: calendar }}
            currentView="Month"
            // dataBinding={onDataBinding}
            actionComplete={onActionComplete}
          >
            <ViewsDirective>
              <ViewDirective option="Day" displayName="יום" />
              <ViewDirective option="Week" />
              <ViewDirective option="WorkWeek" />
              <ViewDirective option="Month" />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </>
      )}
    </div>
  );
}

export default Calendar;
