import React from 'react';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import ReactPath from "../../ReactPath/ReactPath";

export default class NavbarComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href={ReactPath.HOME}>BackStage</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href={ReactPath.QUERY}>Query</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                </Navbar>
            </div>
        );
    }
}
