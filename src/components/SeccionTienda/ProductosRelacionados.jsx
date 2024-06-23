import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const productosRelacionados = [
  {
    imgSrc: 'assets/img/shop_08.jpg',
    nombre: 'Red Clothing',
    precio: 20.00,
    colores: ['red', 'blue', 'black', 'light', 'green'],
    tallas: 'M/L/X/XL',
    estrellas: 4,
  },
  {
    imgSrc: 'assets/img/shop_09.jpg',
    nombre: 'White Shirt',
    precio: 25.00,
    colores: ['red', 'blue', 'black', 'light', 'green'],
    tallas: 'M/L/X/XL',
    estrellas: 4,
  },
  {
    imgSrc: 'assets/img/shop_10.jpg',
    nombre: 'Oupidatat non',
    precio: 45.00,
    colores: ['red', 'blue', 'black', 'light', 'green'],
    tallas: 'M/L/X/XL',
    estrellas: 5,
  },
  {
    imgSrc: 'assets/img/shop_11.jpg',
    nombre: 'Black Fashion',
    precio: 60.00,
    colores: ['red', 'blue', 'black', 'light', 'green'],
    tallas: 'M/L/X/XL',
    estrellas: 4,
  },
  // Añadir más productos si es necesario
];

function ProductosRelacionados() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-left p-2 pb-3">
          <h4>Productos Relacionados</h4>
        </div>
        <Slider {...settings}>
          {productosRelacionados.map((producto, index) => (
            <div className="p-2 pb-3" key={index}>
              <div className="product-wap card rounded-0">
                <div className="card rounded-0">
                  <img className="card-img rounded-0 img-fluid" src={producto.imgSrc} alt={producto.nombre} />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                      <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                      <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="h3 text-decoration-none">{producto.nombre}</a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>{producto.tallas}</li>
                    <li className="pt-2">
                      {producto.colores.map((color, colorIndex) => (
                        <span key={colorIndex} className={`product-color-dot color-dot-${color} float-left rounded-circle ml-1`}></span>
                      ))}
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    {Array(5).fill().map((_, starIndex) => (
                      <li key={starIndex}>
                        <i className={`${starIndex < producto.estrellas ? 'text-warning' : 'text-muted'} fa fa-star`}></i>
                      </li>
                    ))}
                  </ul>
                  <p className="text-center mb-0">${producto.precio.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProductosRelacionados;
