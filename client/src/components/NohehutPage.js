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
    const [bool,setBool] = useState(false);
    const [nohehut,setNohehut] = useState(new Map());
    console.log(nohehut);
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
    }
    const handleChange = (soldierId,missingId) => {
        nohehut.set(soldierId,{soldierId: soldierId,missingId: missingId, date:currentDate})
    }
    const handleSubmit = () => {
        if(nohehut.size === soldiers.length){
            setBool(false);
            setNohehut(nohehut);
            sendNohehut();
            console.log("true",nohehut)
        }else {    
            setBool(true);        
            console.log("false",nohehut)
        }
    }
    useEffect(()=>{
        getSoldiers();
        getMissings();
    },[]);
    return (
        <div>
            {
                soldiers && missings &&
                soldiers.map((soldier,i)=>{
                    return <NohehutRow 
                        key={i} 
                        soldier={soldier} 
                        missings={missings}
                        handleChange={handleChange}
                        />
                })
            }
            <button onClick={()=>handleSubmit()}>submit</button>
            {
                bool && <div>{'חייב למלא את כל החיילים'}</div>
            }
        </div>
    )
}

export default NohehutPage
