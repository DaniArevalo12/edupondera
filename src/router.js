const routes = {};
let contentDiv;

export function setupRouter(newRoutes) {
  Object.assign(routes, newRoutes);
  contentDiv = document.getElementById('content');
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange(); // Para cargar la ruta inicial
}

function handleRouteChange() {
  const path = window.location.hash.slice(1) || '/'; // Obtiene la ruta desde el hash
  const Component = routes[path];
  if (Component) {
    contentDiv.innerHTML = ''; // Limpia el contenido
    contentDiv.append(Component()); // Renderiza el componente
  } else {
    contentDiv.innerHTML = '<p>Página no encontrada</p>';
  }
}