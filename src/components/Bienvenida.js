import React from 'react';
import '../styles/Bienvenida.css';
//import logo from '../assets/logo.png'; // Ruta del logo

export default function Bienvenida({ onAgregarMateria }) {
  return (
    <div className="bienvenida-container">
      <div className="search-bar">
        <input type="text" placeholder="Search" disabled />
      </div>
      
      <h2>Bienvenido Estudiante</h2>


      <button className="add-button" onClick={onAgregarMateria}>
        ➕
      </button>

      <p className="mensaje">
        Agrega aquí tus materias para que podamos ayudarte a generar tu promedio actual y tu proyección deseada.
      </p>
    </div>
  );
}
