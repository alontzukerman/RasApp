import React from "react";
import styled from "styled-components";
import { ParaRow, ParaDeleteButton } from "../styledComponents/global";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

function CertificationRow({ certification ,handleDelete}) {
  console.log(certification);
  return (
    <ParaRow>
      <div>
        <strong>שם ההסמכה : </strong>
        {certification.Certification.certificationName}
      </div>
      <ParaDeleteButton onClick={()=>handleDelete(certification.id)}>
        <DeleteOutlineOutlinedIcon />
      </ParaDeleteButton>
    </ParaRow>
  );
}

export default CertificationRow;
