import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                123 Consectetur at ligula 10660
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <a className="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Productos</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><NavLink className="text-decoration-none" to="/tienda">Lujo</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/tienda">Ropa Deportiva</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/tienda">Zapatos para Hombres</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/tienda">Zapatos para Mujeres</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/tienda">Vestidos Populares</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/tienda">Accesorios de Gimnasio</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/tienda">Zapatos Deportivos</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Información Adicional</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><NavLink className="text-decoration-none" to="/">Inicio</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/acerca-de">Acerca de Nosotros</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/tienda">Ubicaciones de Tiendas</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/faqs">Preguntas Frecuentes</NavLink></li>
                            <li><NavLink className="text-decoration-none" to="/contacto">Contacto</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" for="subscribeEmail">Dirección de Correo</label>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Dirección de Correo" />
                            <div className="input-group-text btn-success text-light">Suscribirse</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Derechos de Autor &copy; {new Date().getFullYear()} Nombre de la Compañía 
                                | Diseñado por <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
