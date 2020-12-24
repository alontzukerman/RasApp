import styled from "styled-components";

export const Input = styled.input`
  font-family: "Assistant", sans-serif;
  margin-bottom: 1.8rem;
  border: 0;
  border-bottom: 1px solid #333333;
  font-size: 1.2em;
  background-color: #ffffff00;
  padding-bottom: 5px;
  width: 100%;
  transition: 0.1s border ease;
  &:focus {
    border-bottom: 2px solid #333333;
    outline: 0;
  }
`;
export const ButtonsCon = styled.div`
  background-color: rgba(50, 50, 50, 0.25);
  box-shadow: 0 0 3px 1px rgba(50, 50, 50, 0.5);
  display: flex;
  width: 90%;
  height: 20px;
  justify-content: space-around;
  align-items: center;
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  border: 0;
  background-color: #ede43b;
  box-shadow: -2px 0px 3px 0px rgba(50, 50, 50, 0.6);
  border-left: 5px solid #c7bf32;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  font-size: 1.5em;
  letter-spacing: 1px;
  padding: 10px;
  border-radius: 5px;
  font-weight: 700;
  transition: 0.2s background ease;
  &:hover {
    background-color: #f3ed74;
  }
`;

export const Error = styled.div`
  color: #f37474;
  font-size: 0.8em;
`;

export const Select = styled.select`
  font-family: "Assistant", sans-serif;

  width: 100%;
  height: 30px;
  border: 0;
  border-bottom: 1px solid #333333;
  margin-bottom: 1.8rem;
  font-size: 1.2em;
  padding-bottom: 5px;
`;
export const FormName = styled.div`
  width: 25vw;
  display: flex;
  justify-content: flex-start;
  font-size: 1.2em;
`;
export const Logo = styled.img`
  height: 100%;
`;

export const Title = styled.h1``;

export const GlobalTable = styled.div`
  width: 500px;
  box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.5);
  margin: 30px;
`;

export const TabsContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  align-items: center;
`;

export const Tab = styled.div`
  background-color: rgba(50, 50, 50, 0.25);
  box-shadow: 0 0 3px 1px rgba(50, 50, 50, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 40px;
  width: 300px;
`;

export const Label = styled.div`
  background-color: #ede43b;
  box-shadow: -2px 0px 3px 0px rgba(50, 50, 50, 0.6);
  border-left: 5px solid #c7bf32;
  position: relative;
  right: 0;
  height: 50px;
  width: 100px;
  margin-right: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerTab = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ParaContainer = styled.div`
  box-shadow: 0 0 3px 1px rgba(50, 50, 50, 0.5);
  background-color: rgba(50, 50, 50, 0.25);
  width: 95%;
  margin-top: 50px;
  min-height: 150px;
  position: relative;
`;

export const ParaTitle = styled.div`
  background-color: #ede43b;
  box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.6);
  border-bottom: 5px solid #c7bf32;
  position: absolute;
  top: 0;
  right: 10px;
  margin-top: -20px;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ParaAddButton = styled.button`
cursor: pointer; 
  border: 0;
  background-color: #ede43b;
  box-shadow: 0px -2px 3px 0px rgba(50, 50, 50, 0.6);
  border-top: 5px solid #c7bf32;
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 50px;
  height: 30px;
  margin-bottom: -20px;
`;

export const ParaRows = styled.div`
  height: 100%;
  padding: 30px;
`;

export const ParaRow = styled.div`
position: relative ;
  background-color: rgba(100, 100, 100, 0.2);
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 3px 0;
  & div:not(:last-child) {
    margin-left: 50px;
  }
`;

export const ParaDeleteButton = styled.div`
cursor: pointer; 
position: absolute ;
left: 0 ;
display: flex ;
justify-content: center ;
align-items: center ;
height: 100% ;
width: 40px ;
&:hover {
  background-color: #eb6d6d ;
}

`;
export const ModalContainer = styled.div`
  height: 400px;
  width: 300px;
`;
export const ModalTitle = styled.h2``;

export const ModalButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
export const ModalButton = styled.button`
  cursor: pointer;
  border: 0;
  height: 30px;
  width: 90px;
  box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.6);
  &:hover {
    background-color: #ede43b;
  }
`;

export const ModalForm = styled.form``;
