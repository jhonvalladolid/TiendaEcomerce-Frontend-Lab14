import React from 'react';

function NuestrasMarcas() {
    return (
        <section className="bg-light py-5">
            <div className="container my-4">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Nuestras Marcas</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className="col-lg-9 m-auto tempaltemo-carousel">
                        <div className="row d-flex flex-row">
                            {/* Controles */}
                            <div className="col-1 align-self-center">
                                <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                                    <i className="text-light fas fa-chevron-left"></i>
                                </a>
                            </div>
                            {/* Fin de Controles */}
                            {/* Contenedor del Carrusel */}
                            <div className="col">
                                <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                                    {/* Diapositivas */}
                                    <div className="carousel-inner product-links-wap" role="listbox">
                                        {/* Primera Diapositiva */}
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Marca 1"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Marca 2"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Marca 3"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Marca 4"/></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Fin de Primera Diapositiva */}
                                        {/* Segunda Diapositiva */}
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Marca 1"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Marca 2"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Marca 3"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Marca 4"/></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Fin de Segunda Diapositiva */}
                                        {/* Tercera Diapositiva */}
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Marca 1"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Marca 2"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Marca 3"/></a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Marca 4"/></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Fin de Tercera Diapositiva */}
                                    </div>
                                    {/* Fin de Diapositivas */}
                                </div>
                            </div>
                            {/* Fin de Contenedor del Carrusel */}
                            {/* Controles */}
                            <div className="col-1 align-self-center">
                                <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                                    <i className="text-light fas fa-chevron-right"></i>
                                </a>
                            </div>
                            {/* Fin de Controles */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NuestrasMarcas;
