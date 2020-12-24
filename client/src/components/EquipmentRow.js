import React from 'react'
import {
    NoteDeleteButton,
  } from "../styledComponents/notespage";
  import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { EquipmentContainer} from '../styledComponents/equipmentspage';
import { FormName } from '../styledComponents/global';
function EquipmentRow({equipment, handleDelete}) {
    console.log(equipment);
    return (
        <>
        {equipment.Equipment !== null && (
        <EquipmentContainer>
            <FormName>{equipment.Equipment.equipmentName}</FormName>
            <FormName>{equipment.amount}</FormName>
            <NoteDeleteButton onClick={() => handleDelete(equipment.id)}>
          <DeleteOutlineOutlinedIcon />
        </NoteDeleteButton>
        </EquipmentContainer>
        )}
    </>
    )
}

export default EquipmentRow
