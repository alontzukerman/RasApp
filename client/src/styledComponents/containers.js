import styled from "styled-components";

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PageContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  /* border: 1px solid black ; */
  width: 400px;
  height: 400px;
  box-shadow: 0px 0px 15px 3px rgba(50, 50, 50, 0.15);
  /* padding: 50px ; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerFormContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomePageInnerContainer = styled.div`
  height: 90vh ;
  width: 80% ;
  display: grid ;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px ;
  align-items: center ;
`;