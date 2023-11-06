document.addEventListener("DOMContentLoaded", function() {
  // Ocultar el contenido al cargar la página
  var content = document.getElementById("contentPages");
  if (content) {
    content.style.display = "none";
  }

  // Espera 5 segundos (5000 milisegundos) antes de ocultar el div de carga y mostrar el contenido
  setTimeout(function() {
    var loader = document.getElementById("loaders");
    if (loader) {
      loader.style.display = "none"; // Oculta el div de carga
    }
    if (content) {
      content.style.display = "block"; // Muestra el contenido
    }
  }, 4000);
});
