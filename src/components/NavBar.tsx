import React from 'react';
import human from "../human.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";


const NavBar: React.FC = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink className={'navbar-brand'} to="/">Humans</NavLink>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={'nav-link'} to="/notes">Notes</NavLink>
                            <NavLink className={'nav-link'} to="/c">Circle</NavLink>
                            <NavLink className={'nav-link'} to="/t">Timeline</NavLink>
                        </Nav>
                        <Nav className='text-end'>
                            <NavDropdown
                                align="end"
                                id="nav-dropdown-dark-example"
                                title={
                                    <img src={human} alt="human" className='humanPng '/>}
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="/help">
                                    Help
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/">Feedback</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Sing out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default NavBar;