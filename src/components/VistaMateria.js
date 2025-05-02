import React from 'react';
import '../styles/VistaMateria.css';

export default function VistaMaterias({ materias, onAgregar, onSeleccionar }) {
  return (
    <div className="materias-container">
      <div className="search-bar">
        <input type="text" placeholder="Search" disabled />
      </div>

      <div className="lista-materias">
        {materias.map((materia) => (
          <div
            key={materia.id}
            className="tarjeta-materia"
            style={{
              backgroundImage: materia.fondo ? `url(${materia.fondo})` : 'none',
              backgroundColor: materia.fondo ? 'transparent' : materia.color || '#f0f0f0',
            }}
            onClick={() => onSeleccionar(materia)}
          >
            <h4>{materia.nombre}</h4>
          </div>
        ))}
      </div>

      <button className="boton-agregar" onClick={onAgregar}>➕</button>
    </div>
  );
}
