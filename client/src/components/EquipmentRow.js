import React from 'react'


import { EquipmentContainer} from '../styledComponents/equipmentspage';
import { FormName } from '../styledComponents/global';
function EquipmentRow({equipment}) {
    console.log(equipment);
    return (
        <EquipmentContainer>
            <FormName>{equipment.Equipment.equipmentName}</FormName>
            <FormName>{equipment.amount}</FormName>
        </EquipmentContainer>
    )
}

export default EquipmentRow
