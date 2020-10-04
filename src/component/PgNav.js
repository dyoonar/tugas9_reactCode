import React from 'react';
import {Navbar, Nav, Form, Button, FormControl, NavDropdown} from 'react-bootstrap';

function PgNav(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Berita">Berita</Nav.Link>
                <Nav.Link href="#Live">Live Scores</Nav.Link>
                <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Transfer">Transfer Pemain</Nav.Link>
                <Nav.Link href="#Tim">Tim</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}
export default PgNav;
