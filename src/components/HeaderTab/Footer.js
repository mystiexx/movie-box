import React, { Component } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer p-4">
                        <Container>
                            <Row>
                                <Col>
                                    <h4 className="text-center footer-title">The Basics</h4>
                                    <h6 className="text-center footer-text">About</h6>
                                    <h6 className="text-center footer-text">Contact Us</h6>
                                    <h6 className="text-center footer-text">Support Forums</h6>
                                </Col>
                                <Col sm={4}>
                                    <h4 className="text-center footer-title">Community</h4>
                                    <h6 className="text-center footer-text">Guidelines</h6>
                                    <h6 className="text-center footer-text">LeaderBoard</h6>
                                    <h6 className="text-center footer-text">Forum</h6>
                                </Col>
                                <Col>
                                    <h4 className="text-center footer-title">Legal</h4>
                                    <h6 className="text-center footer-text">Terms of Use</h6>
                                    <h6 className="text-center footer-text">Privacy Policy</h6>
                                </Col>
                            </Row>
                        </Container>
                   
                </div>

            </div>
        )
    }
}

export default Footer;
