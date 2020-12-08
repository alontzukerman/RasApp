import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
function HomePage() {
    const history = useHistory();

    return (
        <HomePageContainer>
            <PageButton>Notes</PageButton>
            <PageButton>Calender</PageButton>
            <PageButton onClick={()=>history.push('/information')}>Information</PageButton>
            <PageButton>Stuff</PageButton>
        </HomePageContainer>

    )
}

const HomePageContainer = styled.div`
    display: grid ;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 5vh ;
`;

const PageButton = styled.div`
    background-color: #999 ;
    height: 30vh ;
    width: 30vw ;
    display: flex;
    justify-content: center ;
    align-items: center ;

`;

export default HomePage
