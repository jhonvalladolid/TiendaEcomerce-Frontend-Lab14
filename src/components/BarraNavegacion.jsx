// src/components/BarraNavegacion.jsx
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

function BarraNavegacion() {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const calcularSubtotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  const calcularTotal = () => {
    const subtotal = calcularSubtotal();
    const freight = 3.90; // Ejemplo de costo de envío
    return subtotal + freight;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand text-success logo h1 align-self-center" to="/">
          J&N Moda
        </NavLink>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tienda">Tienda</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/acerca-de">Acerca de Nosotros</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
              <div className="input-group">
                <input type="text" className="form-control" id="inputMobileSearch" placeholder="Buscar..." />
                <div className="input-group-text">
                  <i className="fa fa-fw fa-search"></i>
                </div>
              </div>
            </div>
            <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
              <i className="fa fa-fw fa-search text-dark mr-2"></i>
            </a>
            <a className="nav-icon position-relative text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#carritoModal">
              <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{carrito.length}</span>
            </a>
            <a className="nav-icon position-relative text-decoration-none" href="#">
              <i className="fa fa-fw fa-user text-dark mr-3"></i>
              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal del Carrito */}
      <div className="modal fade" id="carritoModal" tabIndex="-1" aria-labelledby="carritoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="carritoModalLabel">Mi Carrito</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {carrito.length === 0 ? (
                <p>El carrito está vacío</p>
              ) : (
                <div className="d-flex flex-column">
                  <div className="w-100 mb-4">
                    <p className="text-blue-900 text-xl font-extrabold">Mi carrito</p>
                    {carrito.map((producto) => (
                      <div key={producto.id} className="d-flex justify-content-between align-items-center p-3 border-bottom">
                        <div className="d-flex align-items-center">
                          <img className="img-thumbnail me-3" src={producto.imagen} alt={producto.nombre} style={{ width: '50px', height: '50px' }} />
                          <div>
                            <p className="m-0">{producto.nombre}</p>
                            <p className="m-0 text-muted">Cantidad: {producto.cantidad}</p>
                          </div>
                        </div>
                        <div>
                          <p className="m-0">S/. {producto.precio * producto.cantidad}</p>
                        </div>
                        <button onClick={() => eliminarDelCarrito(producto.id)} className="btn btn-danger btn-sm">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Resumen de la compra */}
                  <div className="w-100 p-3 border-top">
                    <p className="text-blue-900 text-xl font-extrabold">Resumen de la compra</p>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted">Subtotal ({carrito.length} Items)</p>
                      <p>S/. {calcularSubtotal().toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted">Envío</p>
                      <p>S/. 3.90</p>
                    </div>
                    <div className="d-flex justify-content-between border-top pt-2">
                      <p className="text-muted">Total</p>
                      <p className="fw-bold">S/. {calcularTotal().toFixed(2)}</p>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                      <button className="btn btn-success w-100">Finalizar Compra</button>
                      <button className="btn btn-secondary w-100" data-bs-dismiss="modal">Agregar más productos</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BarraNavegacion;
