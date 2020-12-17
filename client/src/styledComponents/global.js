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
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ede43b;
  margin-bottom: 1.8rem;

  color: #333333;
  width: 100%;
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

export const Select = styled.select``;
export const FormName = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.2em;
`;
