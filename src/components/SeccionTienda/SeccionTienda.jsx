import React, { useState } from 'react';
import Categorias from './Categorias';
import MenuTienda from './MenuTienda';
import ListaProductos from './ListaProductos';

function SeccionTienda() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [filtro, setFiltro] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const manejarFiltroSelect = (filtroSeleccionado) => {
    if (filtroSeleccionado === 'Todos') {
      setFiltro(null);
    } else {
      setFiltro(filtroSeleccionado);
    }
  };

  const manejarBuscar = (terminoBusqueda) => {
    setBusqueda(terminoBusqueda);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <Categorias onCategoriaSelect={setCategoriaSeleccionada} />
        <div className="col-lg-9">
          <MenuTienda 
            onFiltroSelect={manejarFiltroSelect}
            onBuscar={manejarBuscar}
          />
          <ListaProductos 
            categoriaSeleccionada={categoriaSeleccionada} 
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            filtro={filtro}
            busqueda={busqueda}
          />
        </div>
      </div>
    </div>
  );
}

export default SeccionTienda;
