import {Navbar, Nav, NavDropdown, Dropdown} from 'react-bootstrap';
import Link from 'next/link'


export default function Layout(){
    return(
        <Navbar variant='dark' expand="lg">
            <Navbar.Brand>
                bonjour.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0">
                    <Nav.Link as={Link} href="/">Home</Nav.Link>
                    <NavDropdown title="Boutique" id="games_dropdown">
                        <Dropdown.Item as={Link} href="/games_store">Tous</Dropdown.Item>
                        <NavDropdown.Divider/>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}