import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

class Contacto extends Component {
    render() {
        return (
            <div div className="footer-main-wraper">

                <div className="header-cont">
                    <div className="footer-logo">
                    </div>
                    <div className="footer-navbar">
                        <ul>

                            <li>
                                <Link to="/PageHome">Home </Link>
                            </li>
                            <li>
                                <Link to="/PageServicios">Services</Link>
                            </li>
                            <li>
                                <Link to="/PageContacto">Contacto</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="footer-contact-section">
                    <div className="section-one-contact">
                             <h1>Contactanos</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                    
                    
                </div>

                <div className="mainCont-contfooter">
                    © 2019 Uxmal Stream
                </div>

            </div>
        );
    }
}

export default Contacto;