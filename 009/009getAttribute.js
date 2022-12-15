"use strict";
// Escribe el código para obtener el atributo data-widget-name del documento y leer su valor.

let attribute = document.querySelector("[data-widget-name]");

alert(attribute.getAttribute("data-widget-name"));