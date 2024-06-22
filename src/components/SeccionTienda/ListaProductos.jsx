import React from 'react';
import Producto from './Producto';

function ListaProductos() {
  const productos = [
    {
      id: 1,
      imgSrc: 'assets/img/shop_01.jpg',
      nombre: 'Producto 1',
      precio: 250.00,
      colores: ['red', 'blue', 'black', 'light', 'green'],
      tallas: 'M/L/X/XL',
      estrellas: 3,
    },
    {
      id: 2,
      imgSrc: 'assets/img/shop_02.jpg',
      nombre: 'Producto 2',
      precio: 250.00,
      colores: ['red', 'blue', 'black', 'light', 'green'],
      tallas: 'M/L/X/XL',
      estrellas: 3,
    },
    {
      id: 3,
      imgSrc: 'assets/img/shop_03.jpg',
      nombre: 'Producto 3',
      precio: 250.00,
      colores: ['red', 'blue', 'black', 'light', 'green'],
      tallas: 'M/L/X/XL',
      estrellas: 3,
    },
    {
      id: 4,
      imgSrc: 'assets/img/shop_04.jpg',
      nombre: 'Producto 4',
      precio: 250.00,
      colores: ['red', 'blue', 'black', 'light', 'green'],
      tallas: 'M/L/X/XL',
      estrellas: 3,
    },
    {
      id: 5,
      imgSrc: 'assets/img/shop_05.jpg',
      nombre: 'Producto 5',
      precio: 250.00,
      colores: ['red', 'blue', 'black', 'light', 'green'],
      tallas: 'M/L/X/XL',
      estrellas: 3,
    },
    {
      id: 6,
      imgSrc: 'assets/img/shop_06.jpg',
      nombre: 'Producto 6',
      precio: 250.00,
      colores: ['red', 'blue', 'black', 'light', 'green'],
      tallas: 'M/L/X/XL',
      estrellas: 3,
    },
    // Añadir más productos aquí
  ];

  return (
    <div className="row">
      {productos.map((producto, index) => (
        <Producto key={index} {...producto} />
      ))}
    </div>
  );
}

export default ListaProductos;
