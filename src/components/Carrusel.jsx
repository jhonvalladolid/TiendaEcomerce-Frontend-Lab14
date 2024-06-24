import React from 'react';

function Carrusel() {
    return (
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{ backgroundColor: '#E2E2E2' }}>
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" style={{ maxHeight: '400px', maxWidth: '100%', marginLeft: '100px' }} src="./assets/img/c1.png" alt="Banner 1" />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left align-self-center">
                                    <h1 className="h1 text-success"><b>J&N</b> Moda</h1>
                                    <h3 className="h2">Tendencias de Moda para este Mes</h3>
                                    <p>
                                        Bienvenido a J&N Moda, tu tienda en línea de confianza para encontrar las últimas tendencias en moda y estilo. 
                                        Explora nuestra colección de productos cuidadosamente seleccionados para ofrecerte lo mejor en ropa y accesorios.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" style={{ maxHeight: '400px', maxWidth: '100%', marginLeft: '100px' }} src="./assets/img/c2.png" alt="Banner 2" />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left">
                                    <h1 className="h1">Nueva Colección</h1>
                                    <h3 className="h2">Elegancia y Estilo</h3>
                                    <p>
                                        Descubre nuestra nueva colección que combina elegancia y estilo. Diseños únicos que te harán destacar en cualquier ocasión.
                                        Encuentra tu look perfecto con nosotros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" style={{ maxHeight: '400px', maxWidth: '100%', marginLeft: '100px' }} src="./assets/img/c3.png" alt="Banner 3" />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left">
                                    <h1 className="h1">Ofertas Especiales</h1>
                                    <h3 className="h2">Descuentos Exclusivos</h3>
                                    <p>
                                        No te pierdas nuestras ofertas especiales con descuentos exclusivos en una amplia variedad de productos. 
                                        ¡Aprovecha ahora y renueva tu guardarropa con estilo sin gastar de más!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                <i className="fas fa-chevron-right"></i>
            </a>
        </div>
    );
}

export default Carrusel;
