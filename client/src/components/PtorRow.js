import React from 'react'
import styled from 'styled-components';
function PtorRow({ptor}) {
    console.log(ptor)
    return (
        <Row>
            <div>{ptor.Ptor.ptorName}</div>
            <div>{ptor.startDate}</div>
            <div>{ptor.givenDays}</div>
            <UserDetails>
                <div>{ptor.User.firstName}</div>
                <div>{ptor.User.lastName}</div>
            </UserDetails>
        </Row>
    )
}
const Row = styled.div`
    display: flex ;
    flex-direction: row-reverse;
    justify-content: space-between;
`;

const UserDetails = styled.div`
    display: flex ;
    
`;
export default PtorRow
