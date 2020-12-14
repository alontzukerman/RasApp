import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import network from '../network';
import SoldierRow from '../components/SoldierRow';
function SoldiersPage() {

    const [platoons,setPlatoons] = useState() ;
    const [soldiers,setSoldiers] = useState([]);

    const getPlatoons = async () => {
        const { data } = await network.get('/api/platoons');
        setPlatoons(data)
    }
    // const getSoldiers = async () => {
    //     const { data } = await network.get('/api/soldiers');
    //     setSoldiers(data);
    // }
    const getPlatoonSoldiers = async (platoonId) => {
        const { data } = await network.get(`/api/platoons/soldiers/${platoonId}`);
        setSoldiers(data);
    }
    useEffect(()=>{
        getPlatoons();
    },[]);

    useEffect(()=>{
        platoons &&
        getPlatoonSoldiers(platoons[0].platoonId);
    },[platoons])
    return (
        <SoldiersContainer>
            <ButtonsCon>
            {
                platoons && 
                platoons.map((platoon,i)=>{
                    return <button onClick={()=>getPlatoonSoldiers(platoon.id)} key={i}>{platoon.platoonName}</button>
                })
            }
            </ButtonsCon>
            {
                soldiers.map((soldier,i)=>{
                    return <SoldierRow soldier={soldier} key={i} /> ;
                })
            }
        </SoldiersContainer>
    )
}

const SoldiersContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
`;

const ButtonsCon = styled.div``;

export default SoldiersPage
