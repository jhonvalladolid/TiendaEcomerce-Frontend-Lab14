import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import InicioPage from './pages/InicioPage';
import TiendaPage from './pages/TiendaPage';
import ContactoPage from './pages/ContactoPage';
import AcercaDePage from './pages/AcercaDePage';
import ProductoDetallePage from './pages/ProductoDetallePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/acerca-de" element={<AcercaDePage />} />
        <Route path="/producto/:id" element={<ProductoDetallePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
