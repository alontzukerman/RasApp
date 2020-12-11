import React, { useRef } from 'react'
import styled from 'styled-components';

function NohehutRow({soldier,missings,handleChange}) {
    // console.log(soldier);
    // console.log(missings);

    const selectCurrent = useRef(null);
    const handle = () => {
        selectCurrent.current.value &&
        handleChange(soldier.id,Number(selectCurrent.current.value));
    }
    return (
        <NohRow>
            <div>{soldier.firstName}</div>
            <div>{soldier.lastName}</div>
            <select ref={selectCurrent} onChange={()=>handle()}>
                <option></option>
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
    display: flex ;
    flex-direction: row-reverse ;
`;
export default NohehutRow
