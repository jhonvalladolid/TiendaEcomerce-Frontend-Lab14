import React, { useState, useEffect } from 'react';
import Producto from './Producto';
import { obtenerProductos } from '../../apis/api';

function ListaProductos({ categoriaSeleccionada, paginaActual, setPaginaActual, filtro, busqueda }) {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const productosPorPagina = 6;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosObtenidos = await obtenerProductos();
        setProductos(productosObtenidos);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    let productosFiltrados = productos;

    if (categoriaSeleccionada) {
      productosFiltrados = productosFiltrados.filter(producto => producto.categoria.id === categoriaSeleccionada.id);
    }

    if (filtro && filtro !== 'Todos') {
      productosFiltrados = productosFiltrados.filter(producto => producto.nombre.toLowerCase().includes(filtro.toLowerCase()));
    }

    if (busqueda) {
      productosFiltrados = productosFiltrados.filter(producto => 
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    setProductosFiltrados(productosFiltrados);
    setPaginaActual(1); // Resetear a la primera página al cambiar de filtro o búsqueda
  }, [categoriaSeleccionada, filtro, busqueda, productos]);

  // Productos a mostrar en la página actual
  const indexOfLastProduct = paginaActual * productosPorPagina;
  const indexOfFirstProduct = indexOfLastProduct - productosPorPagina;
  const productosActuales = productosFiltrados.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div className="row">
        {productosActuales.map((producto) => (
          <Producto key={producto.id} {...producto} />
        ))}
      </div>
      <div className="row">
        <ul className="pagination pagination-lg justify-content-end">
          {Array.from({ length: Math.ceil(productosFiltrados.length / productosPorPagina) }, (_, index) => (
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
