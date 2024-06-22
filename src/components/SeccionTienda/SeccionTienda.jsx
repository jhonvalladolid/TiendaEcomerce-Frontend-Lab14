import React from 'react';
import Categorias from './Categorias';
import MenuTienda from './MenuTienda';
import ListaProductos from './ListaProductos';

function SeccionTienda() {
  return (
    <div className="container py-5">
      <div className="row">
        <Categorias />
        <div className="col-lg-9">
          <MenuTienda />
          <ListaProductos />
          <div className="row">
            <ul className="pagination pagination-lg justify-content-end">
              <li className="page-item disabled">
                <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex="-1">1</a>
              </li>
              <li className="page-item">
                <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeccionTienda;
