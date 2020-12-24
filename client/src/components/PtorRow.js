import React from "react";
import styled from "styled-components";
import { ParaRow , ParaDeleteButton} from "../styledComponents/global";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

function PtorRow({ ptor , handleDelete }) {
  console.log(ptor);


  return (
    <ParaRow>
      <div>
        <strong>שם הפטור : </strong>
        {ptor.Ptor.ptorName}
      </div>
      <div>
        <strong>תאריך התחלה : </strong>
        {ptor.startDate}
      </div>
      <div>
        <strong>תוקף : </strong>
        {ptor.givenDays}
      </div>
      <div>
        <strong>ניתן על ידי : </strong>
        {`${ptor.User.firstName} ${ptor.User.lastName}`}
      </div>
      <ParaDeleteButton onClick={()=>handleDelete(ptor.id)}>
        <DeleteOutlineOutlinedIcon />
      </ParaDeleteButton>
    </ParaRow>
  );
}

export default PtorRow;
