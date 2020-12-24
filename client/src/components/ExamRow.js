import React from "react";
import styled from "styled-components";
import { ParaRow, ParaDeleteButton } from "../styledComponents/global";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
function ExamRow({ exam , handleDelete}) {
  console.log(exam);
  return (
    <ParaRow>
      <div>
        <strong>שם המבחן : </strong>
        {exam.Exam.examName}
      </div>
      <div>
        <strong>תוצאה : </strong>
        {exam.mark}
      </div>
      <ParaDeleteButton onClick={()=>handleDelete(exam.id)}>
        <DeleteOutlineOutlinedIcon />
      </ParaDeleteButton>
    </ParaRow>
  );
}
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default ExamRow;
