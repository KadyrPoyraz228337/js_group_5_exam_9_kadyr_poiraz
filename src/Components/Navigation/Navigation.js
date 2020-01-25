import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "reactstrap";
import NavElem from "./NavElem/NavElem";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand tag={NavLink} to='/'>Phone Book</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavElem to='/new-'>Add new contact</NavElem>
                    </Nav>
                </Container>
            </Navbar>
            );
};

export default Navigation;