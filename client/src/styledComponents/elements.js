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
export const HomePageBtn = styled.div`
  cursor: pointer;
  border-radius: 5px;
  border-top: 5px solid #c7bf32;
  background-color: #ede43b;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s background ease ;
  &:hover {
    background-color: #f3ed74
  }
  &:hover .iconsStyle {
    transform: rotate(5deg);
  }
  &:hover h2 {
    letter-spacing: 2px;
  }
`;
export const HomePageBtnTitle = styled.h2`
  margin-bottom: 1.4em;
  transition: letter-spacing 0.2s ease;
`;
export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 2px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  background: black;
  color: black;
  box-shadow: 0px 5px 3px 2px rgba(0, 0, 0, 0.75);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  margin: 0;
`;
