import React, { Component } from 'react';

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