import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductosRelacionados from '../components/SeccionTienda/ProductosRelacionados';
import { obtenerProductoPorId } from '../apis/api';

function ProductoDetallePage() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const marcas = ['Easy Wear', 'ModaPlus', 'EstiloLibre', 'TrendSetter', 'FashionLine'];

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoObtenido = await obtenerProductoPorId(id);
        setProducto(productoObtenido);
        setSelectedImage(productoObtenido.imagen);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const marcaAleatoria = marcas[Math.floor(Math.random() * marcas.length)];
  const calificacionAleatoria = (Math.random() * 5).toFixed(1);
  const comentariosAleatorios = Math.floor(Math.random() * 100) + 1;

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img className="card-img img-fluid" src={selectedImage} alt="Producto" id="product-detail" />
              </div>
              <div className="row">
                <div className="col-1 align-self-center">
                  <a href="#multi-item-example" role="button" data-bs-slide="prev">
                    <i className="text-dark fas fa-chevron-left"></i>
                    <span className="sr-only">Anterior</span>
                  </a>
                </div>
                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                  <div className="carousel-inner product-links-wap" role="listbox">
                    {[...Array(3)].map((_, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="row">
                          {[...Array(3)].map((_, subIndex) => (
                            <div className="col-4" key={subIndex} onClick={() => setSelectedImage(producto.imagen)}>
                              <a href="#">
                                <img className="card-img img-fluid" src={producto.imagen} alt={`Product Image ${subIndex + 1}`} />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-1 align-self-center">
                  <a href="#multi-item-example" role="button" data-bs-slide="next">
                    <i className="text-dark fas fa-chevron-right"></i>
                    <span className="sr-only">Siguiente</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">{producto.nombre}</h1>
                  <p className="h3 py-2">S/. {producto.precio}</p>
                  <p className="py-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i key={index} className={`fa ${index < Math.floor(calificacionAleatoria) ? 'fa-star text-warning' : 'fa-star text-secondary'}`}></i>
                    ))}
                    <span className="list-inline-item text-dark">Calificación {calificacionAleatoria} | {comentariosAleatorios} Comentarios</span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Marca:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>{marcaAleatoria}</strong></p>
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Categoría:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>{producto.categoria.nombre}</strong></p>
                    </li>
                  </ul>
                  <h6>Descripción:</h6>
                  <p>{producto.descripcion}</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Color Disponible:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>Blanco / Negro</strong></p>
                    </li>
                  </ul>

                  <h6>Especificaciones:</h6>
                  <ul className="list-unstyled pb-3">
                    <li>Material de alta calidad</li>
                    <li>Diseño moderno y elegante</li>
                    <li>Durabilidad garantizada</li>
                    <li>Disponible en varios tamaños</li>
                    <li>Fácil de lavar</li>
                    <li>Confort y estilo</li>
                    <li>Perfecto para cualquier ocasión</li>
                  </ul>

                  <form action="" method="GET">
                    <input type="hidden" name="product-title" value={producto.nombre} />
                    <div className="row">
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item">Tamaño:
                            <input type="hidden" name="product-size" id="product-size" value="S" />
                          </li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                        </ul>
                      </div>
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item text-right">
                            Cantidad
                            <input type="hidden" name="product-quantity" id="product-quantity" value="1" />
                          </li>
                          <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                          <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                          <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row pb-3">
                      <div className="col d-grid">
                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Comprar</button>
                      </div>
                      <div className="col d-grid">
                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Añadir al Carrito</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductosRelacionados />
    </>
  );
}

export default ProductoDetallePage;
