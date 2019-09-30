import Navbar from "react-bootstrap/lib/Navbar";
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem'
import React from 'react';


const NavBar = () => {
    return(
        <Navbar>
            <Navbar.Brand href="#home">BackStage</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem href="#home">Home</NavItem>
                    <NavItem href="#home">About</NavItem>
                    <NavItem href="#home">Product</NavItem>
                    <NavItem href="#home">Contact</NavItem>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
