import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom' ;
import { SoldierRowContainer } from '../styledComponents/soldierspage';
import { FormName } from '../styledComponents/global';
function SoldierRow({soldier}) {
    const history = useHistory();
    return (
        <SoldierRowContainer onClick={()=>history.push(`/soldier/${soldier.id}`)}>
            <FormName>{soldier.id}</FormName>
            <FormName>{soldier.firstName}</FormName>
            <FormName>{soldier.lastName}</FormName>
        </SoldierRowContainer>
            
    
    )
}

export default SoldierRow
