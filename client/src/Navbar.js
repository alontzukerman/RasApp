import React, { useContext } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import network from "./network";
import {
  HeaderContainer,
  InnerHeaderContainer,
  NavContainer,
  InnerNavContainer,
  NavTagList,
  NavTag,
  LogOutButton,
} from "./styledComponents/navbar";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import Cookies from "js-cookie";
import { User } from "./context";
function Navbar() {
  const location = useHistory();
  const gUser = useContext(User);

  const handleLogout = async () => {
    const response = await network.post(`/api/auth/logout`, {
      token: Cookies.get("refreshToken"),
    });
    console.log(response);
    Cookies.remove("refreshToken");
    gUser.setUser(null);
    location.push("/login");
  };

  return (
    <HeaderContainer>
      <InnerHeaderContainer>
        <NavContainer>
          <InnerNavContainer>
            <NavTagList>
              <NavTag onClick={() => location.push("/")}>בית</NavTag>
              <NavTag onClick={() => location.push("/soldiers")}>חיילים</NavTag>
              <NavTag onClick={() => location.push("/notes")}>פתקים</NavTag>
              <NavTag onClick={() => location.push("/nohehut")}>נוכחות</NavTag>
              <NavTag onClick={() => location.push("/profile")}>פרופיל</NavTag>
              <NavTag onClick={() => location.push("/calender")}>יומן</NavTag>

            </NavTagList>
          </InnerNavContainer>
          <LogOutButton onClick={() => handleLogout()}>התנתק</LogOutButton>
        </NavContainer>
        <ChildCareIcon />
      </InnerHeaderContainer>
    </HeaderContainer>
  );
}

// const Nav = styled.div`
//     background-color: #333 ;
//     position: sticky ;
//     top: 0 ;
// `;
export default Navbar;
