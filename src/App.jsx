import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import InicioPage from './pages/InicioPage';
import TiendaPage from './pages/TiendaPage';
import ContactoPage from './pages/ContactoPage';
import AcercaDePage from './pages/AcercaDePage';
import './App.css';

function App() {
  return (
    <Router>
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/acerca-de" element={<AcercaDePage />} />
      </Routes>
    </Router>
  );
}

export default App;
