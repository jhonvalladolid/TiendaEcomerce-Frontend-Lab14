import React, { useState, useEffect } from 'react';
import Producto from './Producto';
import { obtenerProductos } from '../../apis/api';

function ListaProductos({ categoriaSeleccionada, paginaActual, setPaginaActual }) {
  const [productos, setProductos] = useState([]);
  const productosPorPagina = 6;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosObtenidos = await obtenerProductos();
        if (categoriaSeleccionada) {
          const productosFiltrados = productosObtenidos.filter(producto => producto.categoria.id === categoriaSeleccionada.id);
          setProductos(productosFiltrados);
        } else {
          setProductos(productosObtenidos);
        }
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
    setPaginaActual(1); // Resetear a la primera página al cambiar de categoría
  }, [categoriaSeleccionada]);

  // Productos a mostrar en la página actual
  const indexOfLastProduct = paginaActual * productosPorPagina;
  const indexOfFirstProduct = indexOfLastProduct - productosPorPagina;
  const productosActuales = productos.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div className="row">
        {productosActuales.map((producto) => (
          <Producto key={producto.id} {...producto} />
        ))}
      </div>
      <div className="row">
        <ul className="pagination pagination-lg justify-content-end">
          {Array.from({ length: Math.ceil(productos.length / productosPorPagina) }, (_, index) => (
            <li 
              key={index} 
              className={`page-item ${index + 1 === paginaActual ? 'active' : ''}`}
              style={index + 1 === paginaActual ? { backgroundColor: '#69BB7E', color: 'white' } : {}}
            >
              <a 
                className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPaginaActual(index + 1);
                }}
                style={index + 1 === paginaActual ? { backgroundColor: '#69BB7E', color: 'white' } : {}}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListaProductos;
