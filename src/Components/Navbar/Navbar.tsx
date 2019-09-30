import Navbar from "react-bootstrap/lib/Navbar";
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem'
import React from 'react';

// import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return(
        <Navbar>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem href="#home">Home</NavItem>
                    <NavItem href="#home">Home</NavItem>
                    <NavItem href="#home">Home</NavItem>
                    <NavItem href="#home">Home</NavItem>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
