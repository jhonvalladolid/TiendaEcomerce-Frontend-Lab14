import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importación de estilos Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'leaflet/dist/leaflet.css';

// Importación de estilos personalizados y fuentes de iconos
import './assets/css/bootstrap.min.css';  // Esto podría ser redundante si ya importaste el de Bootstrap
import './assets/css/templatemo.css';
import './assets/css/custom.css';
import './assets/css/fontawesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
