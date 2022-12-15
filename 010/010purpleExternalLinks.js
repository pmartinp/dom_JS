"use strict";
/* Haz todos los enlaces externos de color purple alterando su propiedad style.
*/

// establecer un estilo para un enlace
let link = document.querySelectorAll("a");

for (const iterator of link) {
    iterator.style.color = "purple";
}