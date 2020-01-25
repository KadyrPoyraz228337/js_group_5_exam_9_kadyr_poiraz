import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "reactstrap";
import NavElem from "./NavElem/NavElem";

const Navigation = () => {
    return (
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavElem to='/'>Home</NavElem>
                        <NavElem to='/about'>About</NavElem>
                    </Nav>
                </Container>
            </Navbar>
            );
};

export default Navigation;