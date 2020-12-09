import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Nav>
            <Link to="/">
                Home
            </Link>
            <Link to="/soldiers">
                Soldiers
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
