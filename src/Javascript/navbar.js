document.addEventListener("DOMContentLoaded", function() {
    // Obtén el elemento con el ID "docknavs"
    var docknavs = document.getElementById("docknavs");
  
    // Oculta el elemento inicialmente
    docknavs.style.opacity = 0;
  
    // Espera 5 segundos antes de mostrarlo
    setTimeout(function() {
      // Aplica una transición de opacidad para mostrarlo suavemente
      docknavs.style.transition = "opacity 1s ease";
      docknavs.style.opacity = 1;
    }, 5000); // 5000 milisegundos (5 segundos)
  });
  