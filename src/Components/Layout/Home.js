import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Layout extends Component {
    render() {
        return (
            <div className="main-wraper">
               
                <div className="mainCont-header">

                    <div className="logo">
                    </div>

                    <div className="navbar">
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

                <div className="mainCont-section">
                    <div className="section-one-home">
                        <h1>Transformamos espacios y creamos atmosferas</h1>
                        <p>Transformar un espacio es determinante para 
                            generar una conexión especial con las personas 
                            y su entorno.</p>
                    </div>
                </div>

                <div className="mainCont-footer">
                        © 2019 Uxmal Stream
                </div>
                
            </div>
        );
    }
}

export default Layout;