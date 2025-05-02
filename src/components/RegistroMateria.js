import React, { useState } from 'react';
import '../styles/RegistroMateria.css';

export default function RegistroMateria({ onMateriaAgregada }) {
  const [nombre, setNombre] = useState('');
  const [colorSeleccionado, setColorSeleccionado] = useState('');
  const [imagenFondo, setImagenFondo] = useState(null);

  const colores = ['#e0e0e0', '#9ecbff', '#fda4af', '#bbf7d0', '#e9d5ff', '#fdba74'];

  const handleAgregar = () => {
    if (!nombre) return;
    const nuevaMateria = {
      id: Date.now(),
      nombre,
      color: colorSeleccionado,
      fondo: imagenFondo,
    };
    onMateriaAgregada(nuevaMateria);
    setNombre('');
    setColorSeleccionado('');
    setImagenFondo(null);
  };

  const handleImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenFondo(reader.result); // base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="registro-materia-container">
      <h3>Registre su materia</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <div className="colores">
        <label>Colores:</label>
        <div className="opciones">
          {colores.map((color) => (
            <div
              key={color}
              className={`color ${colorSeleccionado === color ? 'seleccionado' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setColorSeleccionado(color)}
            />
          ))}
        </div>
      </div>

      <div className="cargar-fondo">
        <label>Cargar fondo:</label>
        <input type="file" accept="image/*" onChange={handleImagen} />
      </div>

      <button
        onClick={handleAgregar}
        disabled={!nombre}
        className="boton-agregar"
      >
        Agregar Materia
      </button>
    </div>
  );
}
