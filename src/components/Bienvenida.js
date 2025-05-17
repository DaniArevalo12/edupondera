import '../styles/Modal.css';
import React, { useState } from 'react';
import '../styles/Bienvenida.css';
import RegistroMateria from './RegistroMateria';
import VistaMaterias from './VistaMateria';

export default function Bienvenida({ onMateriasActualizadas }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [materias, setMaterias] = useState([]);

  const handleAgregarMateria = () => {
    setIsModalOpen(true);
  };

  const handleMateriaAgregada = (nuevaMateria) => {
    const nuevasMaterias = [...materias, nuevaMateria];
    setMaterias(nuevasMaterias);
    setIsModalOpen(false);
    if (onMateriasActualizadas) {
      onMateriasActualizadas(nuevasMaterias);
    }
  };

  return (
    
    <div className="bienvenida-container">
      <h2>Bienvenido Estudiante</h2>
      <p className="mensaje">
        Agrega aquí tus materias para que podamos ayudarte a generar tu promedio actual y tu proyección deseada.
      </p>

      <VistaMaterias
        materias={materias}
        onAgregar={handleAgregarMateria}
        onSeleccionar={(materia) => console.log('Seleccionada:', materia)}
      />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <RegistroMateria onMateriaAgregada={handleMateriaAgregada} />
            <button onClick={() => setIsModalOpen(false)} className="close-button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
