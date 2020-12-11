import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
    const style = {
        color: "white",
        textDecoration: "none",
      };
    
    return (
        <Nav>
            <Link style={style} to="/">
                Home
            </Link>
            <Link style={style} to="/soldiers">
                Soldiers
            </Link>
            <Link style={style} to="/notes">
                Notes
            </Link>
        </Nav>
    )
}


const Nav = styled.div`
    background-color: #333 ;
    position: sticky ;
    top: 0 ;
`;
export default Navbar
