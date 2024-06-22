import React from 'react';

function MenuTienda() {
  return (
    <div className="row">
      <div className="col-md-6">
        <ul className="list-inline shop-top-menu pb-3 pt-1">
          <li className="list-inline-item">
            <a className="h3 text-dark text-decoration-none mr-3" href="#">Todos</a>
          </li>
          <li className="list-inline-item">
            <a className="h3 text-dark text-decoration-none mr-3" href="#">Hombres</a>
          </li>
          <li className="list-inline-item">
            <a className="h3 text-dark text-decoration-none" href="#">Mujeres</a>
          </li>
        </ul>
      </div>
      <div className="col-md-6 pb-4">
        <div className="d-flex">
          <select className="form-control">
            <option>Destacados</option>
            <option>A a Z</option>
            <option>Ítem</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MenuTienda;
