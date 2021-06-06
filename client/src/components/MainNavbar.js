import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from 'react-router-dom'
class MainNavbar extends Component {
    render() {
        const { categoryPath } = this.props
        return (
            <Navbar className="mt-4 rounded" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand className="px-4" style={{ fontStyle: 'italic' }}>Readable</Navbar.Brand>
                </LinkContainer>
                <Nav className='navbar-category px-4'>
                    <Nav.Link  style={{ textTransform: 'capitalize' }}>
                        {categoryPath}
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }

}


function mapStateToProps({ orderBy }, props) {
    const pathname = props.location.pathname
    let categoryPath = ''
    if (pathname) {
        let categor = pathname.split('/')[2]
        if (categor === "react" || categor === "redux" || categor === "udacity") {
            categoryPath = categor
        } else {
            categoryPath = 'all'
        }
    }

    return { categoryPath }

}

export default withRouter(connect(mapStateToProps)(MainNavbar));