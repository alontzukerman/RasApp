import styled from "styled-components";
import { Theme } from "../theme";

const theme = Theme();

export const RegisterPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: hidden ;
  overflow-x: hidden ;
  background-color: ${theme.background};
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative ;
  @media (max-width: 768px) {
    & > div {
      width: 330px;
      /* height: 330px; */
    }
  }
`;
export const RegisterFormContainer = styled.div`
  /* border: 1px solid black ; */
  border-radius: 10px;
  background-color: ${theme.main};
  width: 500px;
  box-shadow: 0px 0px 15px 3px rgba(50, 50, 50, 0.15);
  min-height: 400px ;
  max-height: 600px ;
  padding-top: 20px ;
  margin-top: 20px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300 ;
  position: relative ;
`;

export const InnerRegisterFormContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterTitle = styled.h2`
position: absolute ;
top: 0 ;
border-bottom: 2px solid ${theme.dark} ;
margin-top: -30px ;
background-color: ${theme.bright};
padding: 5px ;
border-radius: 5px ;
width: 100px ;
display: flex ;
justify-content: center ;
align-items: center ;
letter-spacing: 1px ;
`;
export const CircleXXL = styled.div`
  position: absolute;
  
  border-radius: 50%;
  background: ${theme.bright};
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  width: 1000px;
  height: 1000px;
  left: -500px;
  bottom: 0;
  opacity: 0.2;

`;
export const CircleXL = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${theme.bright};
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  width: 800px;
  height: 800px;
  left: -400px;
  bottom: 100px;
  opacity: 0.5;

`;
export const CircleL = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${theme.bright};
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  width: 600px;
  height: 600px;
  left: -300px;
  bottom: 200px;
  opacity: 0.7;

`;
export const CircleM = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${theme.bright};
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  width: 400px;
  height: 400px;
  left: -200px;
  bottom: 300px;
  opacity: 0.8;

`;
export const CircleS = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${theme.bright};
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  width: 200px;
  height: 200px;
  left: -100px;
  bottom: 400px;
  opacity: 0.9;

`;
