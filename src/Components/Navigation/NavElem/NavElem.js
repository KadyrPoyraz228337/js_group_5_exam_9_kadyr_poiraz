import React from 'react';
import {NavLink as RouterNavLink} from "react-router-dom";
import {NavItem, NavLink} from "reactstrap";

const NavElem = (
    {to, children}
) => {
    return (
        <NavItem>
            <NavLink tag={RouterNavLink} to={to} exact>{children}</NavLink>
        </NavItem>
    );
};

export default NavElem;