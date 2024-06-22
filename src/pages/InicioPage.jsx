import React from 'react';
import Carrusel from '../components/Carrusel';
import SearchModal from '../components/SearchModal';
import CategoriesSection from '../components/CategoriesSection';
import ProductosDestacados from '../components/ProductosDestacados';

function InicioPage() {
  return (
    <div>
      <SearchModal/>
      <Carrusel/>
      <CategoriesSection/>
      <ProductosDestacados/>
    </div>
  );
}

export default InicioPage;
