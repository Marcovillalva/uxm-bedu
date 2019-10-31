import React, { Component } from 'react';
import {Link} from "react-router-dom"

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
                <div>
                    hello
                </div>

            </div>
        );
    }
}

export default Contacto;