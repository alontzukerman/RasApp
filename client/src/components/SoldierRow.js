import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom' ;
function SoldierRow({soldier}) {
    const history = useHistory();
    return (
        <SolRow onClick={()=>history.push(`/soldier/${soldier.id}`)}>
            <SolCol>{soldier.firstName}</SolCol>
            <SolCol>{soldier.lastName}</SolCol>
            <SolCol>{soldier.birthday}</SolCol>
        </SolRow>
            
    
    )
}

const SolRow = styled.div`
    height: 10vh ;
    width: 90vw ;
    background-color: #fff ;
    border: 2px solid black ;
    display: flex ;
    flex-direction: row ;
    justify-content: space-between ;
    align-items: center ;
    padding: 0.5em ;
    &:hover {
        background-color: #777 ;
    }
`;
const SolCol = styled.div`
    width: 25vw ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
`;
export default SoldierRow
