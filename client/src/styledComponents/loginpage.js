import styled from "styled-components";
import { Theme } from "../theme";

const theme = Theme();

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.background};
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginFormContainer = styled.div`
  /* border: 1px solid black ; */
  border-radius: 10px;
  background-color: ${theme.main};
  width: 400px;
  height: 400px;
  box-shadow: 0px 0px 15px 3px rgba(50, 50, 50, 0.15);
  /* padding: 50px ; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerLoginFormContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
