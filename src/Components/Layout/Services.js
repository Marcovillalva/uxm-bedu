import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Services extends Component {
    render() {
        return (
            <div className="services-main-wraper">

                <div className="container-header">

                    <div className="services-logo">
                    </div>

                    <div className="services-navbar">
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

                <div className="container">

                    <div className="services-cont">

                            <p>Todos los que adquieren Uxmal
                                tienen una evolución con su marca,
                                dan el siguiente paso para llegar al
                                siguiente nivel.</p>
                            <div className="services-box">
                                <div className="servicios">
                                </div>
                                <div className="servicios">
                                </div>
                                <div className="servicios">
                                </div>
                                <div className="servicios">
                                </div>
                                <div className="servicios">
                                </div>
                                <div className="servicios">
                                </div>
                            </div>
                    
                    </div>

                </div>  

                <div className="serv-footer">
                        © 2019 Uxmal Stream
                </div>  
            </div>
        );
    }
}

export default Services;