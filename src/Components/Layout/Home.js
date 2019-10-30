import React, { Component } from 'react';

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
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Servicios</a>
                            </li>
                            <li>
                                <a>Contacto</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mainCont-section">
                    <div className="section-one">
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