import React from 'react';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import ReactPath from "../../ReactPath/ReactPath";

export default class NavbarComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href={ReactPath.HOME}>BackStage</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href={ReactPath.DIFFERENCE}>Difference Calculator</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={ReactPath.PYTHAGOREAN}>Pythagorean Triplet</NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
            </div>
        );
    }
}
