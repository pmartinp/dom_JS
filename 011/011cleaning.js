"use strict";
// Crea una función clear(elem) que remueva todo del elemento.
function clear(elem) {
  elem.innerHTML = ''; // accedemos al html del "elem" y lo borramos
}

clear(document.getElementById("elem")); // borra la lista
