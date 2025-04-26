import React, { useState } from 'react';
import '../styles/RegistroMateria.css';

export default function RegistroMateria() {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('#FFD700');
  const [materias, setMaterias] = useState([]);

  const agregarMateria = () => {
    if (nombre.trim()) {
      const nueva = {
        id: Date.now(),
        nombre,
        color
      };
      setMaterias([...materias, nueva]);
      setNombre('');
    }
  };

  return (
    <div className="registro-container">
      <h2>Registrar Materia</h2>
      <input
        type="text"
        placeholder="Nombre de la materia"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={agregarMateria} disabled={!nombre}>Agregar Materia</button>

      <h3>Materias Registradas</h3>
      <ul>
        {materias.map((m) => (
          <li key={m.id} style={{ color: m.color }}>{m.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
