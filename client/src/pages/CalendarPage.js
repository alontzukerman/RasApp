import { React, useState, useEffect, useContext } from "react";
import { setCulture, setCurrencyCode } from "@syncfusion/ej2-base";
import "./calendarPage.css";
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

L10n.load({
  he: {
    schedule: {
      saveButton: "הוסף",
      cancelButton: "סגור",
      deleteButton: "מחק",
      newEvent: "הוסף אירוע",
      "e-float-text e-label-top": "dscskdckskcsks",
    },
  },
});

function Calendar() {
  const [calendar, setCalendar] = useState([]);

  const gUser = useContext(User);
  console.log(gUser);
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

  const onSmp = async () => {
    const { data } = await network.get(`/api/calendar/smp`);
    console.log(data);
    setCalendar(data);
  };
  const onMm = async () => {
    const { data } = await network.get(`/api/calendar/mm`);
    console.log(data);
    setCalendar(data);
  };
  const onMp = async () => {
    const { data } = await network.get(`/api/calendar/mp`);
    console.log(data);
    setCalendar(data);
  };
  const onSamal = async () => {
    const { data } = await network.get(`/api/calendar/samal`);
    console.log(data);
    setCalendar(data);
  };
  const onMac = async () => {
    const { data } = await network.get(`/api/calendar/mac`);
    console.log(data);
    setCalendar(data);
  };

  // const eventTemplate= (props)=> {
  //   console.log(props)
  //   return (<div className="template-wrap" style={{backgroundColor: "#808000" }}>{props.Subject}
{/* <div className="e-appointment-details" style={{backgroundColor:"#808000" }}></div> */}
{/* <div className="time" style={{ background: props.PrimaryColor }}> */}
{/* Time: {(props.StartTime)} - {(props.EndTime)}</div> */}
{/* </div>);
} */}
  useEffect(() => {
    getAllCalendar();
  }, []);
  console.log(calendar);
  return (
    <div>
      {calendar && (
        <>
          מיין על פי:{" "}
          <ButtonComponent
            id="add"
            title="sort"
            //  ref={t => this.buttonObj = t}
            onClick={() => getAllCalendar()}
          >
            הכל
          </ButtonComponent>
          <ButtonComponent
            id="add"
            title="sort"
            //  ref={t => this.buttonObj = t}
            onClick={() => onMp()}
          >
            מ"פ
          </ButtonComponent>
          <ButtonComponent
            id="add"
            title="sort"
            //  ref={t => this.buttonObj = t}
            onClick={() => onSmp()}
          >
            סמ"פ
          </ButtonComponent>
          <ButtonComponent
            id="add"
            title="sort"
            //  ref={t => this.buttonObj = t}
            onClick={() => onMm()}
          >
            מ"מ
          </ButtonComponent>
          <ButtonComponent
            id="add"
            title="sort"
            //  ref={t => this.buttonObj = t}
            onClick={() => onSamal()}
          >
            סמל
          </ButtonComponent>
          <ButtonComponent
            id="add"
            title="sort"
            //  ref={t => this.buttonObj = t}
            onClick={() => onMac()}
          >
            מ"כ
          </ButtonComponent>
          <ScheduleComponent
            dateFormat="yyyy/MM/dd"
            locale="he"
            enableRtl={true}
            eventSettings={{ dataSource: calendar,
              //  template:eventTemplate
              }}
            currentView="Month"
            actionComplete={onActionComplete}

          >
            <ViewsDirective>
              <ViewDirective option="TODAY" displayName="יום"  />
              <ViewDirective option="Day" displayName="יום" />
              <ViewDirective option="Week" displayName="שבוע" />
              <ViewDirective option="Month" displayName="חודש" />
              <ViewDirective option="Agenda" displayName="לוז יומי" />
            </ViewsDirective>
            <Inject services={[Day, Week, Month, Agenda]} />
          </ScheduleComponent>
        </>
      )}
    </div>
  );
}

export default Calendar;
