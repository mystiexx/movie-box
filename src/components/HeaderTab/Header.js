import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="#home">Movie-Box</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><Link to="/">Movies</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/tvshows">Tv Shows</Link></Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default Header;