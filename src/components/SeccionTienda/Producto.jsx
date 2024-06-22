import React from 'react';
import { Link } from 'react-router-dom';

function Producto({ id, imgSrc, nombre, precio, colores, tallas, estrellas }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 product-wap rounded-0">
        <div className="card rounded-0">
          <img className="card-img rounded-0 img-fluid" src={imgSrc} alt="Producto" />
          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
            <ul className="list-unstyled">
              <li><Link to={`/producto/${id}`} className="btn btn-success text-white"><i className="far fa-heart"></i></Link></li>
              <li><Link to={`/producto/${id}`} className="btn btn-success text-white mt-2"><i className="far fa-eye"></i></Link></li>
              <li><Link to={`/producto/${id}`} className="btn btn-success text-white mt-2"><i className="fas fa-cart-plus"></i></Link></li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <Link to={`/producto/${id}`} className="h3 text-decoration-none">{nombre}</Link>
          <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
            <li>{tallas}</li>
            <li className="pt-2">
              {colores.map((color, index) => (
                <span key={index} className={`product-color-dot color-dot-${color} float-left rounded-circle ml-1`}></span>
              ))}
            </li>
          </ul>
          <ul className="list-unstyled d-flex justify-content-center mb-1">
            {Array(5).fill().map((_, index) => (
              <li key={index}>
                <i className={`${index < estrellas ? 'text-warning' : 'text-muted'} fa fa-star`}></i>
              </li>
            ))}
          </ul>
          <p className="text-center mb-0">${precio}</p>
        </div>
      </div>
    </div>
  );
}

export default Producto;
