import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesSection() {
    return (
        <section className="container py-5">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Categorías del Mes</h1>
                    <p>
                        Descubre nuestras categorías destacadas del mes. Encuentra lo último en moda y estilo que tenemos para ofrecerte.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-5 mt-3">
                    <Link to="/tienda">
                        <img src="/assets/img/Vestido.webp" className="rounded-circle img-fluid border" alt="Vestidos" />
                    </Link>
                    <h5 className="text-center mt-3 mb-3">Vestidos</h5>
                    <p className="text-center"><Link to="/tienda" className="btn btn-success">Ir a la Tienda</Link></p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <Link to="/tienda">
                        <img src="/assets/img/Chompa.webp" className="rounded-circle img-fluid border" alt="Chompas" />
                    </Link>
                    <h5 className="text-center mt-3 mb-3">Chompas</h5>
                    <p className="text-center"><Link to="/tienda" className="btn btn-success">Ir a la Tienda</Link></p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <Link to="/tienda">
                        <img src="/assets/img/Abrigo.webp" className="rounded-circle img-fluid border" alt="Abrigos" />
                    </Link>
                    <h5 className="text-center mt-3 mb-3">Abrigos</h5>
                    <p className="text-center"><Link to="/tienda" className="btn btn-success">Ir a la Tienda</Link></p>
                </div>
            </div>
        </section>
    );
}

export default CategoriesSection;
