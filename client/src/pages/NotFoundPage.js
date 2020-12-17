import React from 'react'
import { useHistory } from 'react-router-dom';
import RassAppLogo_Vertical from '../files/RassAppLogo_Vertical.png' ;
import { NotFoundPageContainer,NotFoundPageInnerContainer} from '../styledComponents/notfound.js';
import { Button } from '../styledComponents/global';

function NotFoundPage() {
    const location = useHistory();
    return (
        <NotFoundPageContainer>
            <NotFoundPageInnerContainer>

            <img src={RassAppLogo_Vertical} alt="Logo" />
            <Button onClick={()=>location.push('/')}>חזור לדף הבית</Button>
            </NotFoundPageInnerContainer>
        </NotFoundPageContainer>
    )
}

export default NotFoundPage
