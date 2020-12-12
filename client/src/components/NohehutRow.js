import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

function NohehutRow({soldier,missings,handleChange,isFilled}) {
    // console.log(isFilled);
    // console.log(soldier);
    // console.log(missings);

    const selectCurrent = useRef(null);
    const [firstOption,setFirstOption] = useState(null);
    // console.log(firstOption);
    const handle = () => {
        selectCurrent.current.value &&
        handleChange(soldier.id,Number(selectCurrent.current.value));
    }
    const getFirstOption = () => {
        const chosenMissing = missings.find((missing)=>{ 
            // console.log(missing) ;
            // console.log(isFilled) ;
            console.log(missing.id === isFilled[0].missingId) ;
            return missing.id === isFilled[0].missingId ;
        })
        console.log(chosenMissing);
        // setFirstOption({missingId:chosenMissing.id,name: chosenMissing.missingName})
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
                    <option value={firstOption.missingId}>{firstOption.missingName}</option>
                    :
                    <option></option>
                }
                {
                    missings.map((missing,i)=>{
                        return <option value={missing.id}>{missing.missingName}</option>
                    })
                }
            </select>
        </NohRow>
    )
}

const NohRow = styled.div`
    width: 100% ;
    display: flex ;
    flex-direction: row-reverse ;
`;

const Firstname = styled.div`
    width: 30% ;
    float: right ;
`;
const Lastname = styled.div`
    width: 30% ;
`;
export default NohehutRow
