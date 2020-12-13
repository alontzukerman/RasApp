import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import NohehutRow from './NohehutRow';


const currentDate = 
    (new Date().getFullYear())
    +"-"+
    (new Date().getMonth()+1)
    +"-"+
    (new Date().getDate());
    
function NohehutPage() {
    const [soldiers,setSoldiers] = useState([]);
    const [missings,setMissings] = useState([]);
    const [filledSoldiers,setFilledSoldiers] = useState([])
    const [bool,setBool] = useState(false);
    const [nohehut,setNohehut] = useState(new Map());

    const isFilled = async () => {
        const { data } = await axios.get(`/api/missings/daily/${currentDate}`);
        // console.log(data);
        setFilledSoldiers(data);
    }
    const getSoldiers = async () => {
        const { data } = await axios.get(`/api/soldiers`);
        setSoldiers(data);
    }
    const getMissings = async () => {
        const { data } = await axios.get(`/api/missings`)
        setMissings(data);
    }
    const sendNohehut = async () => {
        let nohehutArray = Array.from(nohehut).map(([name,value])=>(value));
        console.log(nohehutArray);
        const response = await axios.post(`/api/missings/daily`,nohehutArray);
        console.log(response);
    }
    const handleChange = (soldierId,missingId) => {
        nohehut.set(soldierId,{soldierId: soldierId,missingId: missingId, date:currentDate})
    }
    const handleSubmit = () => {
        if(nohehut.size === soldiers.length){
            setBool(false);
            setNohehut(nohehut);
            sendNohehut();
        } else {    
            setBool(true);        
        }
    }
    useEffect(()=>{
        isFilled();
        getSoldiers();
        getMissings();
    },[]);
    return (
        <NohPage>
            {
                soldiers && missings &&
                soldiers.map((soldier,i)=>{
                    return <NohehutRow 
                        key={i} 
                        soldier={soldier} 
                        missings={missings}
                        isFilled={filledSoldiers.filter((row)=>row.soldierId === soldier.id)}
                        handleChange={handleChange}
                        />
                })
            }
            <Button onClick={()=>handleSubmit()}>שלח</Button>
            {
                bool && <div>{'חייב למלא את כל החיילים'}</div>
            }
        </NohPage>
    )
}

const NohPage = styled.div`

    width: 100% ;
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;

`;
const Button = styled.button`

`;
export default NohehutPage
