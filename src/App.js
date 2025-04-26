import React, { useState } from 'react';
import Bienvenida from './components/Bienvenida';
import RegistroMateria from './components/RegistroMateria'; // Lo agregaremos luego

function App() {
  const [pantalla, setPantalla] = useState('bienvenida');

  const manejarAgregarMateria = () => {
    setPantalla('registro-materia');
  };

  return (
    <div>
      {pantalla === 'bienvenida' && <Bienvenida onAgregarMateria={manejarAgregarMateria} />}
      {pantalla === 'registro-materia' && <RegistroMateria />}
    </div>
  );
}

export default App;
