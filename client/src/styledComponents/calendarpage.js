import styled from "styled-components";
import {Theme} from "../theme";

const theme = Theme()

export const CalendarPageContainer = styled.div`
height: 90vh;
width: 100%;
overflow-y: scroll ;
background-color: ${theme.bright};
color: ${theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const SortByContainer = styled.div`
display: flex;
padding:20px;
`;