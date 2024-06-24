import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { obtenerProductosPorCategoria } from '../../apis/api';
import Producto from './Producto'; // Asegúrate de que la ruta sea correcta

function ProductosRelacionados({ categoriaId }) {
  const [productosRelacionados, setProductosRelacionados] = useState([]);

  useEffect(() => {
    const fetchProductosRelacionados = async () => {
      try {
        const productos = await obtenerProductosPorCategoria(categoriaId);
        setProductosRelacionados(productos);
      } catch (error) {
        console.error('Error al obtener productos relacionados:', error);
      }
    };

    if (categoriaId) {
      fetchProductosRelacionados();
    }
  }, [categoriaId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h4>Productos Relacionados</h4>
          </div>
        </div>
        <Slider {...settings}>
          {productosRelacionados.map((producto) => (
            <div className="p-2 pb-3" key={producto.id}>
              <Producto {...producto} colSize={12} />
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .product-wap {
          width: 100%;
        }
        .slick-prev:before, .slick-next:before {
          color: #000000; /* Cambia el color a tu preferencia */
        }
      `}</style>
    </section>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#000000' }} // Cambia el color a tu preferencia
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#000000' }} // Cambia el color a tu preferencia
      onClick={onClick}
    />
  );
}

export default ProductosRelacionados;
