import styled from "styled-components";

export const SoldiersPageContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

`;

export const SoldierRowContainer = styled.div`
  display: flex;
  padding: 5px;
  &:hover {
    background-color: #ede43b;
  }
`;

export const AddSoldierContainer = styled.div`
  border: 1px solid black;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(220, 220, 220, 0.8);
  transform: ${props=>props.open ? "translateX(0)" : "translateX(100%)"};
`;

export const AddSoldierFormContainer = styled.form`
  height: 80%;
  width: 90%;
  display: grid;
  justify-items: center ;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
`;

export const DivForm = styled.div`
  background: linear-gradient(#ede43b, #e4df8b);
  position: relative;
  width: 220px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 5px;
`;

export const InputForm = styled.input`
  font-family: "Assistant", sans-serif;
  background-color: rgba(50, 50, 50, 0.9);
  box-shadow: 0 3px 3px 1px rgba(50, 50, 50, 0.25);
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  border: 0;
  color: #f9f9f9;
  padding: 5px;
  width: 230px;
  transition: 0.1s border ease;
  &:focus {
    outline: 0;
  }
`;

export const SelectForm = styled.select`
  font-family: "Assistant", sans-serif;
  background-color: rgba(50, 50, 50, 0.9);
  box-shadow: 0 3px 3px 1px rgba(50, 50, 50, 0.25);
  color: #f9f9f9;
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  width: 230px;
  border: 0;
  padding: 5px;
  &:focus {
    outline: 0;
  }
`;
export const ButtonsForm = styled.div`
position: absolute ;
left: 0 ;
height: 100px ;
width: 100px ;
margin-left: -50px ;
`;
export const ButtonOpenForm = styled.button`
position: absolute ;
left: 0 ;
top: 0 ;
bottom: 0 ;
width: 45px ;
`;
export const ButtonSubmitForm = styled.button`
position: absolute ;
top: 0 ;
right: 0 ;
width: 45px ;
height: 45px ;

`;
export const ButtonCancelForm = styled.button`
position: absolute ;
bottom: 0 ;
right: 0 ;
width: 45px ;
height: 45px ;
`;
