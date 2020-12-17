import network from '../network';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { NohRowContainer } from '../styledComponents/nohehutpage';
import { Select , FormName } from '../styledComponents/global';



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
        <NohRowContainer>
            <FormName>{soldier.firstName}</FormName>
            <FormName>{soldier.lastName}</FormName>
            <Select ref={selectCurrent} onChange={()=>handle()}>
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
            </Select>
        </NohRowContainer>
    )
}

export default NohehutRow
