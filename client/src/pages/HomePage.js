import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
function HomePage() {
    const history = useHistory();

    return (
        <HomePageContainer>
            <PageButton onClick={()=>history.push('/notes')}>פתקים</PageButton>
            <PageButton>יומן</PageButton>
            <PageButton onClick={()=>history.push('/soldiers')}>חיילים</PageButton>
            <PageButton onClick={()=>history.push('/nohehut')}>נוכחות</PageButton>
        </HomePageContainer>

    )
}

const HomePageContainer = styled.div`
    height: 100%;
    width: 100% ;
    display: grid ;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 2vh ;
`;

const PageButton = styled.div`
    background-color: #999 ;
    /* height: 30vh ;
    width: 30vw ; */
    display: flex;
    justify-content: center ;
    align-items: center ;
    &:hover {
        background-color: #4e4e4e ;
    }

`;

export default HomePage
