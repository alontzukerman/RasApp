import React from 'react'
import styled from 'styled-components';
import HomeIcon from "@material-ui/icons/Home";
import { Link,NavLink } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
    const style = {
        color: "white",
        textDecoration: "none",
      };
    
    return (
        <nav>
        <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/">
        <div className="homenav">
          <span>Home</span>
          <HomeIcon/>
        </div>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/soldiers">
        <div className="homenav">
          Soldiers
        </div>
      </NavLink>
      <NavLink activeStyle={{ color: "#ee5050" }} style={style} to="/notes">
        <div className="homenav">
          Notes
        </div>
      </NavLink>
      </nav>
    )
}


// const Nav = styled.div`
//     background-color: #333 ;
//     position: sticky ;
//     top: 0 ;
// `;
export default Navbar
