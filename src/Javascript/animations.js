// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento con la ID "animations"
    var animationElement = document.getElementById("animations");
  
    // Aplica una animación de desvanecimiento en 2 segundos
    animationElement.style.opacity = 0;
    animationElement.style.transition = "opacity 2s ease";
  
    // Establece la opacidad en 1 después de un pequeño retraso
    setTimeout(function() {
      animationElement.style.opacity = 1;
    }, 100);
  
    // Puedes ajustar la duración y el retraso según tus preferencias
  });
  