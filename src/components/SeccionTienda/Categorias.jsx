import React, { useState, useEffect } from 'react';
import { obtenerCategorias } from '../../apis/api';

function Categorias({ onCategoriaSelect }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasObtenidas = await obtenerCategorias();
        setCategorias(categoriasObtenidas);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <div className="col-lg-3">
      <h1 className="h2 pb-4">Categorías</h1>
      <ul className="list-unstyled templatemo-accordion" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <li className="pb-2">
          <a 
            className="collapsed d-flex justify-content-between h4 text-decoration-none" 
            href="#" 
            onClick={() => onCategoriaSelect(null)}
          >
            Todos
            <i className="fa fa-fw fa-eye mt-1" style={{ fontSize: '0.75em' }}></i>
          </a>
        </li>
        {categorias.map((categoria) => (
          <li key={categoria.id} className="pb-2">
            <a 
              className="collapsed d-flex justify-content-between h4 text-decoration-none" 
              href="#" 
              onClick={() => onCategoriaSelect(categoria)}
            >
              {categoria.nombre}
              <i className="fa fa-fw fa-eye mt-1" style={{ fontSize: '0.75em' }}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
