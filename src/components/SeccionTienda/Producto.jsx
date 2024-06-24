import React from 'react';
import { Link } from 'react-router-dom';

function Producto({ id, imagen, nombre, precio, categoria, colSize = 4 }) {
  const tallas = ['S', 'M', 'L', 'XL']; // Talllas explícitas
  const estrellas = Math.floor(Math.random() * 5) + 1; // Calificación aleatoria entre 1 y 5

  return (
    <div className={`col-md-${colSize}`}>
      <div className="card mb-4 product-wap rounded-0">
        <div className="card rounded-0">
          <Link to={`/producto/${id}`}>
            <img className="card-img rounded-0 img-fluid" src={imagen} alt="Producto" />
          </Link>
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
          <p className="text-center mb-0">{categoria.nombre}</p>
          <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
            <li>{tallas.join(' / ')}</li>
          </ul>
          <ul className="list-unstyled d-flex justify-content-center mb-1">
            {Array(5).fill().map((_, index) => (
              <li key={index}>
                <i className={`${index < estrellas ? 'text-warning' : 'text-muted'} fa fa-star`}></i>
              </li>
            ))}
          </ul>
          <p className="text-center mb-0">S/. {precio}</p>
        </div>
      </div>
    </div>
  );
}

export default Producto;
