import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'semantic-ui-css/semantic.min.css';


const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Brand href="/read">Display Users</Navbar.Brand>
                
            </Container>
        </Navbar>
    )
}

export default Header;