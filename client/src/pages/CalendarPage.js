import {React, useState,useEffect} from "react";
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data'
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

function Calendar() {
  const[calendar,setCalendar] = useState([]);


  const getAllCalendar = async () =>{
    const { data } = await network.get(`/api/calendar`);
    setCalendar(data)
  }
  


  console.log(calendar)
  useEffect(()=>{
    getAllCalendar();
  },[])

  return (
    <div>
      <ScheduleComponent eventSettings={{ dataSource: calendar }} ScheduleView = "DayView"
        // currentView="Agenda"
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default Calendar;
