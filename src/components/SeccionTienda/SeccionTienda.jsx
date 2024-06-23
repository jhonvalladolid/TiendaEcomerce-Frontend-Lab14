import React, { useState } from 'react';
import Categorias from './Categorias';
import MenuTienda from './MenuTienda';
import ListaProductos from './ListaProductos';

function SeccionTienda() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);

  return (
    <div className="container py-5">
      <div className="row">
        <Categorias onCategoriaSelect={setCategoriaSeleccionada} />
        <div className="col-lg-9">
          <MenuTienda />
          <ListaProductos 
            categoriaSeleccionada={categoriaSeleccionada} 
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
          />
        </div>
      </div>
    </div>
  );
}

export default SeccionTienda;
