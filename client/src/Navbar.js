import React, { useContext } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import network from "./network";
import { Nav } from './styledComponents/elements';
import Cookies from 'js-cookie';
import { User } from './context';
function Navbar() {
  const style = {
    color: "white",
    textDecoration: "none",
  };
  const location = useHistory();
  const gUser = useContext(User);

  const handleLogout = async () => {
    const response = await network.post(`/api/auth/logout`,{token: Cookies.get('refreshToken')});
    console.log(response);
    Cookies.remove('refreshToken');
    gUser.setUser(null);
    location.push('/login');
  }

  return (
    <Nav>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/">
        <Button color="primary">
          <span>בית</span>
          <HomeIcon />
        </Button>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/soldiers">
        <Button color="primary">חיילים</Button>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/notes">
        <Button color="primary">פתקים</Button>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/nohehut">
        <Button color="primary">נוכחות</Button>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/profile">
        <Button color="primary">פרופיל</Button>
      </NavLink>
        <Button color="primary" onClick={()=>handleLogout()} className="homenav">התנתק</Button>
    </Nav>
  );
}

// const Nav = styled.div`
//     background-color: #333 ;
//     position: sticky ;
//     top: 0 ;
// `;
export default Navbar;
