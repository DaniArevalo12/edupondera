import '../styles/Materias.css';  // Esta ruta es correcta

// Materias de ejemplo (reemplazar con datos reales)
const materias = [
  { id: 1, nombre: 'Cálculo I', color: '#f0f0f0' },
  { id: 2, nombre: 'Programación I', color: '#e0e0e0' },
  { id: 3, nombre: 'Física', color: '#d0d0d0' },
  // ... más materias
];

function Materias() {
  const container = document.createElement('div');
  container.id = 'materias-container';

  const h2 = document.createElement('h2');
  h2.textContent = 'Materias';
  container.appendChild(h2);

  const materiasContainer = document.createElement('div');
  materiasContainer.id = 'materias-list-container';
  container.appendChild(materiasContainer);

  materias.forEach((materia) => {
    const materiaCard = document.createElement('div');
    materiaCard.classList.add('materia-card');
    materiaCard.style.backgroundColor = materia.color;

    const materiaLink = document.createElement('a');
    materiaLink.href = `#/materia/${materia.id}`;
    materiaLink.textContent = materia.nombre;
    materiaLink.classList.add('materia-link');
    materiaCard.appendChild(materiaLink);
    materiasContainer.appendChild(materiaCard);
  });

  const addButton = document.createElement('a');
  addButton.href = '#/registro-materia';
  addButton.classList.add('add-button');
  addButton.textContent = '➕';
  container.appendChild(addButton);

  return container;
}

export default Materias;