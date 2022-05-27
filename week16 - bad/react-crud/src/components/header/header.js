import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'semantic-ui-css/semantic.min.css';



const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Add New Employee</Nav.Link>
                        <Nav.Link href="/read">View All Employees</Nav.Link>      
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;