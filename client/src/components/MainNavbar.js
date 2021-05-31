import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from "react-router-bootstrap";

function MainNavbar() {
    return (
        <Navbar className="mt-4 rounded" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand className="px-4" style={{ fontStyle: 'italic' }}>Readable</Navbar.Brand>
            </LinkContainer>
            <Nav className='navbar-category px-4'>
                <Nav.Link  >
                    Category Name
                    </Nav.Link>
            </Nav>
        </Navbar>
    )
}


function mapStateToProps({ orderBy }) {
     return { orderBy }

}

export default connect(mapStateToProps)(MainNavbar);