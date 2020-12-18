import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #333333;
  height: 10vh;
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
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
      display: ${props => props.isOpen ? 'block' : 'none'} ;
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
  color: #ffffff;
  display: block;
  height: 100%;
  padding: 10px 15px;
  font-weight: bold;
  transition: 0.2s background ease;
  &:not(:last-child) {
    margin-left: 5px ;
  }
  &:hover {
    background-color: #ede43b;
    color: #333333;
  }
  @media (max-width: 868px) {
    & {
      background-color: #444444;
      width: 100%;
      color: #fff;
      z-index: 100;
      position: relative;
      top: 0;
      margin: 0 ;
      padding: 10px 0 ;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 1px;
    }
  }
`;
export const LogOutButton = styled.button`
  cursor: pointer;
  margin-right: 30px;
  background-color: #c7bf32;
  border: 0;
  padding: 5px;
  color: #f9f9f9;
`;

export const IconBox = styled.div`
  cursor: pointer;
`;
