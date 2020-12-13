import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/">
        <div className="homenav">
          <span>בית</span>
          <HomeIcon />
        </div>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/soldiers">
        <div className="homenav">חיילים</div>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/notes">
        <div className="homenav">פתקים</div>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/nohehut">
        <div className="homenav">נוכחות</div>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/profile">
        <div className="homenav">פרופיל</div>
      </NavLink>
    </nav>
  );
}

// const Nav = styled.div`
//     background-color: #333 ;
//     position: sticky ;
//     top: 0 ;
// `;
export default Navbar;
