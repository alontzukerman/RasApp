import network from '../network';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';


const currentDate = 
    (new Date().getFullYear())
    +"-"+
    (new Date().getMonth()+1)
    +"-"+
    (new Date().getDate());
    
function NohehutRow({soldier,missings,handleChange,isFilled}) {
    // console.log(soldier);
    const selectCurrent = useRef(null);
    const [firstOption,setFirstOption] = useState(null);

    const updateMissing = async () => {
        let updatedMissing = {soldierId: soldier.id,missingId: selectCurrent.current.value,date:currentDate}
        const response = await network.patch(`/api/missings/daily`,updatedMissing)
        console.log(response);
    }
    const handle = () => {
        isFilled.length>0 
        ?
        updateMissing()
        :
        selectCurrent.current.value && 
        handleChange(soldier.id,Number(selectCurrent.current.value));
    }
    const getFirstOption = () => {
        const chosenMissing = missings.filter((missing)=>{ 
            return missing.id === isFilled[0].missingId ;
        })
        chosenMissing[0] && setFirstOption({id:chosenMissing[0].id,name: chosenMissing[0].missingName})
    }
    useEffect(()=>{
        isFilled.length > 0 && getFirstOption();
    },[])
    return (
        <NohRow>
            <Firstname>{soldier.firstName}</Firstname>
            <Lastname>{soldier.lastName}</Lastname>
            <select ref={selectCurrent} onChange={()=>handle()}>
                {
                    firstOption !== null 
                    ?
                    <option value={firstOption.id}>{firstOption.name}</option>
                    :
                    <option></option>
                }
                {
                    missings.map((missing,i)=>{
                        return <option key={i} value={missing.id}>{missing.missingName}</option>
                    })
                }
            </select>
        </NohRow>
    )
}

const NohRow = styled.div`
    width: 100% ;
    display: flex ;
    flex-direction: row ;
    justify-content: center;
    border: 1px solid black ;
    padding: .5em ;
`;

const Firstname = styled.div`
    width: 30% ;
    float: right ;
`;
const Lastname = styled.div`
    width: 30% ;
`;
export default NohehutRow
