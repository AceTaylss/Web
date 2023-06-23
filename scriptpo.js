var diapositivas;
var puntos;
var indiceActual = 0;

// Función para cambiar la diapositiva actual
function cambiarDiapositiva(indice) {
  diapositivas[indiceActual].classList.remove("activa");
  puntos[indiceActual].classList.remove("activo");
  diapositivas[indice].classList.add("activa");
  puntos[indice].classList.add("activo");
  indiceActual = indice;
}

// Función para alternar las diapositivas automáticamente
function alternarDiapositivas() {
  setInterval(function() {
    var siguiente = (indiceActual + 1) % diapositivas.length;
    cambiarDiapositiva(siguiente);
  }, 10000); // Cambiar de diapositiva cada 10 segundos (10000 ms)
}

diapositivas = Array.from(document.getElementsByClassName("diapositiva"));
puntos = Array.from(document.getElementsByClassName("punto"));
