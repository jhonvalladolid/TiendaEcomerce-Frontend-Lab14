import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obtenerProductos } from '../apis/api';

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosObtenidos = await obtenerProductos();
        // Asignar una calificación aleatoria (entre 1 y 5 estrellas) a cada producto
        const productosConEstrellas = productosObtenidos.map(producto => ({
          ...producto,
          estrellas: Math.floor(Math.random() * 5) + 1 // Calificación aleatoria entre 1 y 5
        }));
        // Tomar solo los primeros 10 productos
        const primerosDiezProductos = productosConEstrellas.slice(0, 10);
        // Seleccionar aleatoriamente 3 productos de los primeros 10
        const productosAleatorios = [];
        while (productosAleatorios.length < 3) {
          const randomIndex = Math.floor(Math.random() * primerosDiezProductos.length);
          const productoAleatorio = primerosDiezProductos[randomIndex];
          if (!productosAleatorios.includes(productoAleatorio)) {
            productosAleatorios.push(productoAleatorio);
          }
        }
        setProductos(productosAleatorios);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Productos Destacados</h1>
            <p>
              Descubre nuestra selección de productos destacados, cuidadosamente elegidos para ofrecerte la mejor calidad y tendencia del mercado. Encuentra todo lo que necesitas para mejorar tu estilo y comodidad.
            </p>
          </div>
        </div>
        <div className="row">
          {productos.map((producto) => (
            <div className="col-12 col-md-4 mb-4" key={producto.id}>
              <div className="card h-100">
                <Link to={`/producto/${producto.id}`}>
                  <img src={producto.imagen ? producto.imagen : 'https://via.placeholder.com/150'} className="card-img-top" alt={producto.nombre} />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      {[...Array(5)].map((_, index) => (
                        <i key={index} className={`fa ${index < producto.estrellas ? 'fa-star text-warning' : 'fa-star text-muted'}`}></i>
                      ))}
                    </li>
                    <li className="text-muted text-right">S./ {producto.precio}</li>
                  </ul>
                  <Link to={`/producto/${producto.id}`} className="h2 text-decoration-none text-dark">{producto.nombre}</Link>
                  <p className="card-text">{producto.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductosDestacados;
