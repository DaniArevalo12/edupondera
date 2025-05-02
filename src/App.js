import React, { useState } from 'react';
import Bienvenida from './components/Bienvenida';
import RegistroMateria from './components/RegistroMateria';
import VistaMaterias from './components/VistaMateria';

function App() {
  const [pantalla, setPantalla] = useState('bienvenida');
  const [materias, setMaterias] = useState([]);

  const manejarAgregarMateria = (materia) => {
    setMaterias([...materias, materia]);
    setPantalla('lista');
  };

  const irARegistro = () => setPantalla('registro');

  const manejarSeleccionMateria = (materia) => {
    alert(`Materia seleccionada: ${materia.nombre}`);
    // Aquí puedes navegar a "VistaDetalleMateria"
  };

  return (
    <div>
      {pantalla === 'bienvenida' && <Bienvenida onAgregarMateria={irARegistro} />}
      {pantalla === 'registro' && (
        <RegistroMateria onMateriaAgregada={manejarAgregarMateria} />
      )}
      {pantalla === 'lista' && (
        <VistaMaterias
          materias={materias}
          onAgregar={irARegistro}
          onSeleccionar={manejarSeleccionMateria}
        />
      )}
    </div>
  );
}

export default App;
