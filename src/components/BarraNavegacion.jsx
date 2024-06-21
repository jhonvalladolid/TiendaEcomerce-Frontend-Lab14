import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente para la barra de navegación
function BarraNavegacion() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Inicio</NavLink></li>
        <li><NavLink to="/tienda">Tienda</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
        <li><NavLink to="/acerca-de">Acerca De</NavLink></li>
      </ul>
    </nav>
  );
}

export default BarraNavegacion;
