import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function OneSoldierPage() {

    const {soldierId} = useParams();
    const [soldier,setSoldier] = useState([]);

    const getSoldierById = async () => {
        const { data } = await axios.get(`/api/soldiers/${soldierId}`);
        console.log(data);
        setSoldier(data[0]);
    }

    useEffect(()=>{
        getSoldierById() ;
    },[])
    return (
        <SoldierContainer>
            <Tabs>
                <Tab>{soldier.id}</Tab>
                <Tab>{soldier.phoneNumber}</Tab>
                <Tab>{soldier.firstName}</Tab>
                <Tab>{soldier.lastName}</Tab>
                <Tab>{soldier.birthday}</Tab>
                <Tab>{soldier.address}</Tab>
            </Tabs>
            <ParaCon>
                <Title>הסמכות</Title>
            </ParaCon>
            <ParaCon>
                <Title>בחנים</Title>
            </ParaCon>
            <ParaCon>
                <Title>פטורים</Title>
            </ParaCon>
        </SoldierContainer>
    )
}

const SoldierContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
`;
const Tabs = styled.div`
    display: grid ;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em ;
    margin: 0.5em ;
    
    `;
const Tab = styled.div`
    height: 5vh ;
    width: 40vw ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    background-color: #555 ;
    padding: 0.5em ;
    
`;
const ParaCon = styled.div`
    min-height: 15vh ;
    width: 90vw ;
    margin-top: 2vh ;
    border: 1px solid white ;
`;
const Title = styled.div`
    width: 100% ;
    height: 3vh ;
    background-color: #444 ;
    padding: 0.5em 0 ;
    float: right ;
    display: flex ;
    justify-content: flex-end ;
    align-items: center ;
`;
export default OneSoldierPage
