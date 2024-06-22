import React from 'react';
import { Link } from 'react-router-dom';

function ProductosDestacados() {
    return (
        <section className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Productos Destacados</h1>
                        <p>
                            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                            <Link to="/producto/1">
                                <img src="./assets/img/feature_prod_01.jpg" className="card-img-top" alt="Gym Weight" />
                            </Link>
                            <div className="card-body">
                                <ul className="list-unstyled d-flex justify-content-between">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                    </li>
                                    <li className="text-muted text-right">$240.00</li>
                                </ul>
                                <Link to="/producto/1" className="h2 text-decoration-none text-dark">Gym Weight</Link>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                </p>
                                <p className="text-muted">Reviews (24)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                            <Link to="/producto/2">
                                <img src="./assets/img/feature_prod_02.jpg" className="card-img-top" alt="Cloud Nike Shoes" />
                            </Link>
                            <div className="card-body">
                                <ul className="list-unstyled d-flex justify-content-between">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                    </li>
                                    <li className="text-muted text-right">$480.00</li>
                                </ul>
                                <Link to="/producto/2" className="h2 text-decoration-none text-dark">Cloud Nike Shoes</Link>
                                <p className="card-text">
                                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                                </p>
                                <p className="text-muted">Reviews (48)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                            <Link to="/producto/3">
                                <img src="./assets/img/feature_prod_03.jpg" className="card-img-top" alt="Summer Addides Shoes" />
                            </Link>
                            <div className="card-body">
                                <ul className="list-unstyled d-flex justify-content-between">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                    </li>
                                    <li className="text-muted text-right">$360.00</li>
                                </ul>
                                <Link to="/producto/3" className="h2 text-decoration-none text-dark">Summer Addides Shoes</Link>
                                <p className="card-text">
                                    Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                                </p>
                                <p className="text-muted">Reviews (74)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductosDestacados;
