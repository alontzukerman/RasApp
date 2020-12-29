import styled from "styled-components";
import { Theme } from "../theme";

const theme = Theme();
export const HeaderContainer = styled.header`
  background-color: #333333;
  height: 10vh;
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;
export const InnerHeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media (min-width: 869px) {
    & div {
      cursor: pointer;
      display: none;
    }
  }
`;
export const InnerNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 868px) {
    & {
      display: ${(props) => (props.isOpen ? "block" : "none")};
      width: 100%;
      position: absolute;
      top: 0;
    }
    & ul {
      width: 100%;
      display: block;
      position: absolute;
      top: 10vh;
      margin: 0;
      padding: 0;
    }
  }
`;
export const NavTagList = styled.ul`
  /* height: 100%; */
  display: flex;
  list-style-type: none;
`;
export const NavTag = styled.li`
  cursor: pointer;
  color: #f9f9f9;
  display: block;
  height: 100%;
  padding: 10px 15px;
  font-weight: bold;
  transition: 0.2s background ease;
  &:not(:last-child) {
    margin-left: 5px;
  }
  &:hover {
    background-color: ${theme.bright};
    color: #333333;
  }
  @media (max-width: 868px) {
    & {
      background-color: #444444;
      width: 100%;
      color: #f9f9f9;
      z-index: 100;
      position: relative;
      top: 0;
      margin: 0;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 1px;
    }
  }
`;

export const ProfileButton = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9f9f9;
  padding: 20px 0;
  &:hover {
    background-color: rgba(50, 50, 50, 0.6);
  }
`;
export const LogOutButton = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9f9f9;
  padding: 20px 0;
  &:hover {
    background-color: rgba(50, 50, 50, 0.8);
  }
`;

export const IconBox = styled.div`
  cursor: pointer;
  margin-right: 10px ;
`;

export const AvatarNav = styled.div`
  cursor: pointer;
  background-color: ${theme.main};
  height: 40px;
  width: 40px;
  margin-left: 20px;
  border-radius: 50%;
  display: flex ;
  justify-content: center ;
  align-items : center ;
  font-weight: bold ;
  letter-spacing: 1px ;
  font-size: 1.2em ;
  transition: 0.2s background ease ;
  &:hover {
    background-color: ${theme.bright};
  }
`;
export const ProfileMenu = styled.div`
  position: absolute;
  top: 11vh;
  left: 10px;
  width: 150px;
  border-radius: 5px;
  background-color: rgba(50, 50, 50, 0.6);
  transition: 1s ease;
  display: ${(props) => (props.open ? `flex` : `none`)};
  flex-direction: column;
  align-items: center;
`;
export const ToggleContainer = styled.div`
  width: 40px;
  height: 15px;
  margin: 20px;
  border-radius: 30px;
  border: 2px solid #999;
  background-color: #f9f9f900;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ToggleButton = styled.div`
  border: 2px solid black;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => (props.darkMode ? `#232f57` : `#d0d67d`)};
  position: absolute;
  transition: 1s ease;
  ${(props) => (props.darkMode ? `right: -2px;` : `left: -2px;`)}
`;
