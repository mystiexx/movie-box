import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="nav" variant="dark" fixed="top">
                    <Navbar.Brand>
                        <img src={logo} className="d-inline-block align-center logo" alt="logo"/>
                        Movie-Box</Navbar.Brand>
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