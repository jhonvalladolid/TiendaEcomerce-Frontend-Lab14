import React, { useState, useEffect } from 'react';

function MenuTienda({ onFiltroSelect, onBuscar }) {
  const [busqueda, setBusqueda] = useState('');

  const manejarCambioBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // Llamar a la función de búsqueda cada vez que cambia el estado de búsqueda
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onBuscar(busqueda);
    }, 300);

    // Limpiar el timeout si el efecto se vuelve a ejecutar antes de que el timeout se complete
    return () => clearTimeout(delayDebounceFn);
  }, [busqueda, onBuscar]);

  return (
    <div className="row">
      <div className="col-md-6">
        <ul className="list-inline shop-top-menu pb-3 pt-1">
          <li className="list-inline-item">
            <a 
              className="h3 text-dark text-decoration-none mr-3" 
              href="#"
              onClick={(e) => { e.preventDefault(); onFiltroSelect('Todos'); }}
            >
              Todos
            </a>
          </li>
          <li className="list-inline-item">
            <a 
              className="h3 text-dark text-decoration-none mr-3" 
              href="#"
              onClick={(e) => { e.preventDefault(); onFiltroSelect('Hombre'); }}
            >
              Hombres
            </a>
          </li>
          <li className="list-inline-item">
            <a 
              className="h3 text-dark text-decoration-none" 
              href="#"
              onClick={(e) => { e.preventDefault(); onFiltroSelect('Mujer'); }}
            >
              Mujeres
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-6 pb-4">
        <div className="d-flex">
          <input 
            type="text" 
            className="form-control me-2" 
            placeholder="Buscar..."
            value={busqueda}
            onChange={manejarCambioBusqueda}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuTienda;
