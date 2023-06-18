
   // Variables para el recorrido de las imágenes
var slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar/retroceder las imágenes
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Función para cambiar a una imagen específica
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Función principal para mostrar las imágenes
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Ajustar el índice si se excede el número de imágenes
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Ocultar todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Desactivar todos los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostrar la imagen actual y activar el punto correspondiente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
