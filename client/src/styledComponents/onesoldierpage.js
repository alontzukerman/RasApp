import styled from "styled-components";
import { Theme } from '../theme';

const theme = Theme();
export const OneSoldierPageContainer = styled.div`
  height: 90vh;
  width: 100%;
  /* overflow-y: scroll ; */
  background-color: ${theme.background};
  color: ${theme.text};
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
export const OneSoldierPageInnerContainer = styled.div`
height: 100% ;
  width: 100%;
  overflow-y: scroll ;
  display: flex;
  flex-direction: column;
  align-items: center ;
`;
