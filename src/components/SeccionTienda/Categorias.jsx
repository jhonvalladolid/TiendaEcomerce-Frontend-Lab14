import React from 'react';

function Categorias() {
  return (
    <div className="col-lg-3">
      <h1 className="h2 pb-4">Categorías</h1>
      <ul className="list-unstyled templatemo-accordion">
        <li className="pb-3">
          <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
            Género
            <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
          </a>
          <ul className="collapse show list-unstyled pl-3">
            <li><a className="text-decoration-none" href="#">Hombres</a></li>
            <li><a className="text-decoration-none" href="#">Mujeres</a></li>
          </ul>
        </li>
        <li className="pb-3">
          <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
            Ofertas
            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
          </a>
          <ul id="collapseTwo" className="collapse list-unstyled pl-3">
            <li><a className="text-decoration-none" href="#">Deporte</a></li>
            <li><a className="text-decoration-none" href="#">Lujo</a></li>
          </ul>
        </li>
        <li className="pb-3">
          <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
            Productos
            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
          </a>
          <ul id="collapseThree" className="collapse list-unstyled pl-3">
            <li><a className="text-decoration-none" href="#">Bolsa</a></li>
            <li><a className="text-decoration-none" href="#">Suéter</a></li>
            <li><a className="text-decoration-none" href="#">Gafas de sol</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Categorias;
