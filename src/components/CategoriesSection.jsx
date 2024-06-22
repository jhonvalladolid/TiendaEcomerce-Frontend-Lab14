import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesSection() {
    return (
        <section className="container py-5">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Categorías del Mes</h1>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-5 mt-3">
                    <Link to="/categoria/relojes">
                        <img src="./assets/img/category_img_01.jpg" className="rounded-circle img-fluid border" alt="Relojes" />
                    </Link>
                    <h5 className="text-center mt-3 mb-3">Relojes</h5>
                    <p className="text-center"><Link to="/categoria/relojes" className="btn btn-success">Ir a la Tienda</Link></p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <Link to="/categoria/zapatos">
                        <img src="./assets/img/category_img_02.jpg" className="rounded-circle img-fluid border" alt="Zapatos" />
                    </Link>
                    <h2 className="h5 text-center mt-3 mb-3">Zapatos</h2>
                    <p className="text-center"><Link to="/categoria/zapatos" className="btn btn-success">Ir a la Tienda</Link></p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <Link to="/categoria/accesorios">
                        <img src="./assets/img/category_img_03.jpg" className="rounded-circle img-fluid border" alt="Accesorios" />
                    </Link>
                    <h2 className="h5 text-center mt-3 mb-3">Accesorios</h2>
                    <p className="text-center"><Link to="/categoria/accesorios" className="btn btn-success">Ir a la Tienda</Link></p>
                </div>
            </div>
        </section>
    );
}

export default CategoriesSection;
