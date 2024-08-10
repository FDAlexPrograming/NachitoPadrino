// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado de 'react-dom' a 'react-dom/client'
import App from './App';
import './index.css'; // Asegúrate de importar el archivo de estilos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
