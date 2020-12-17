import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #333333;
  height: 10vh;
  position: sticky ;
  top: 0 ;
  right: 0 ;
  left: 0 ;

`;
export const InnerHeaderContainer = styled.div`
  height: 100%;
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const InnerNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 769px){
    & svg {
      cursor: pointer;
      display: none ;
    }
  }
  @media(max-width: 768px){
    & {
      width: 90% ;
      position: absolute ;

    }
    & ul {
      width: 100vw ;
      display: block ;
      position: absolute ;
      top: 0 ;
      }
    & ul li {
      background-color: #333333 ;
      width: 100% ;
      color: #fff;
      z-index: 100 ;
      margin: 0 ;
      
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
  display: block ;
  height: 100% ;
  padding: 10px 15px ;
  font-weight: bold ;
  transition: 0.2s background ease ;
  &:not(:last-child) {
    margin-left: 30px;
  }
  &:hover {
    background-color: #ede43b;
    color: #333333 ;
  }
`;
export const LogOutButton = styled.button`
  cursor: pointer;
  margin-right: 30px;
  background-color: #c7bf32 ;
  border: 0 ;
  padding: 5px ;
  color: #f9f9f9 ;
`;
