import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductoDetallePage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState('/assets/img/product_single_10.jpg');

  // Aquí se pueden obtener los detalles del producto utilizando el id, por ahora es un ejemplo estático
  const producto = {
    id,
    nombre: 'Active Wear',
    precio: 25.00,
    imagenes: [
      '/assets/img/product_single_01.jpg',
      '/assets/img/product_single_02.jpg',
      '/assets/img/product_single_03.jpg',
      '/assets/img/product_single_04.jpg',
      '/assets/img/product_single_05.jpg',
      '/assets/img/product_single_06.jpg',
      '/assets/img/product_single_07.jpg',
      '/assets/img/product_single_08.jpg',
      '/assets/img/product_single_09.jpg'
    ],
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua.',
    colores: ['Blanco', 'Negro'],
    especificaciones: [
      'Lorem ipsum dolor sit',
      'Amet, consectetur',
      'Adipiscing elit,set',
      'Duis aute irure',
      'Ut enim ad minim',
      'Dolore magna aliqua',
      'Excepteur sint'
    ]
  };

  return (
    <section className="bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img className="card-img img-fluid" src={selectedImage} alt="Product" id="product-detail" />
            </div>
            <div className="row">
              <div className="col-1 align-self-center">
                <a href="#multi-item-example" role="button" data-bs-slide="prev">
                  <i className="text-dark fas fa-chevron-left"></i>
                  <span className="sr-only">Previous</span>
                </a>
              </div>
              <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                <div className="carousel-inner product-links-wap" role="listbox">
                  {producto.imagenes.map((img, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="row">
                        {producto.imagenes.slice(index, index + 3).map((subImg, subIndex) => (
                          <div className="col-4" key={subIndex} onClick={() => setSelectedImage(subImg)}>
                            <a href="#">
                              <img className="card-img img-fluid" src={subImg} alt={`Product Image ${subIndex + 1}`} />
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
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="h2">{producto.nombre}</h1>
                <p className="h3 py-2">${producto.precio}</p>
                <p className="py-2">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Marca:</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted"><strong>Easy Wear</strong></p>
                  </li>
                </ul>

                <h6>Descripción:</h6>
                <p>{producto.descripcion}</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Color Disponible:</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted"><strong>{producto.colores.join(' / ')}</strong></p>
                  </li>
                </ul>

                <h6>Especificaciones:</h6>
                <ul className="list-unstyled pb-3">
                  {producto.especificaciones.map((especificacion, index) => (
                    <li key={index}>{especificacion}</li>
                  ))}
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
  );
}

export default ProductoDetallePage;
