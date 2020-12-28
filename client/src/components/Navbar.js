import React, { useContext, useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Toggle from "./Toggle";
import network from "../network";
import {
  HeaderContainer,
  InnerHeaderContainer,
  NavContainer,
  InnerNavContainer,
  NavTagList,
  NavTag,
  LogOutButton,
  ProfileButton,
  IconBox,
  AvatarNav,
  ProfileMenu,
} from "../styledComponents/navbar";
import { Logo } from "../styledComponents/global";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import Cookies from "js-cookie";
import { User } from "../context";
import MenuIcon from "@material-ui/icons/Menu";
import RassAppLogo_Horizontal from "../files/RassAppLogo_Horizontal.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const location = useHistory();
  const gUser = useContext(User);
  console.log(gUser);

  const handleLogout = async () => {
    const response = await network.post(`/api/auth/logout`, {
      token: Cookies.get("refreshToken"),
    });

    console.log(response);
    Cookies.remove("refreshToken");
    gUser.setUser(null);
    location.push("/login");
  };
  const handleMenuClick = () => {
    !menuOpen && setProfileMenu(false)
    setMenuOpen(!menuOpen);
  };
  const handleProfileMenuClick = () => {
    !profileMenu && setMenuOpen(false);
    setProfileMenu(!profileMenu);
  }
  const handleTagClick = (path) => {
    setMenuOpen(false);
    location.push(`${path}`);
  };

  return (
    <HeaderContainer>
      <InnerHeaderContainer>
        <NavContainer>
          <IconBox onClick={() => handleMenuClick()}>
            <MenuIcon />
          </IconBox>
          <InnerNavContainer isOpen={menuOpen}>
            <NavTagList>
              <NavTag onClick={() => handleTagClick("/")}>בית</NavTag>
              <NavTag onClick={() => handleTagClick("/soldiers")}>
                חיילים
              </NavTag>
              <NavTag onClick={() => handleTagClick("/notes")}>פתקים</NavTag>
              {(gUser.user.roleId === 2 || gUser.user.roleId === 6) && (
                <NavTag onClick={() => handleTagClick("/nohehut")}>
                  נוכחות
                </NavTag>
              )}
              <NavTag onClick={() => handleTagClick("/calendar")}>יומן</NavTag>
              <NavTag onClick={() => handleTagClick("/equipments")}>
                ציוד
              </NavTag>
            </NavTagList>
          </InnerNavContainer>
        </NavContainer>
        <AvatarNav onClick={() => handleProfileMenuClick()}></AvatarNav>
        <ProfileMenu open={profileMenu}>
          <Toggle />
          <ProfileButton onClick={() => handleTagClick("/profile")}>
            פרופיל
          </ProfileButton>
          <LogOutButton onClick={() => handleLogout()}>התנתק</LogOutButton>
          {/* <Logo src={RassAppLogo_Horizontal} alt="Logo" /> */}
        </ProfileMenu>
      </InnerHeaderContainer>
    </HeaderContainer>
  );
}

export default Navbar;
