import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';

function InformationPage() {

    const getSoldiers = async () => {
        const { data } = await axios.get('/api/soldiers');
        console.log(data);
    }

    useEffect(()=>{
        getSoldiers();
    },[])
    return (
        <InformationContainer>

        </InformationContainer>
    )
}

const InformationContainer = styled.div`

`;

export default InformationPage
