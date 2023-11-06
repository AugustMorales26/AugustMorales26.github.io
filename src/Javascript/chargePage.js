document.addEventListener("DOMContentLoaded", function() {
    // Obtén el elemento con el ID "PagesViews"
    var pagesViews = document.getElementById("PagesViews");
  
    // Oculta el elemento inicialmente
    pagesViews.style.opacity = 0;
  
    // Espera 5 segundos antes de mostrarlo
    setTimeout(function() {
      // Aplica una transición de opacidad para mostrarlo suavemente
      pagesViews.style.transition = "opacity 1s ease";
      pagesViews.style.opacity = 1;
    }, 5000); // 5000 milisegundos (5 segundos)
  });
  