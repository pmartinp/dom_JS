"use strict";
/* Hay un árbol estructurado como ul/li anidado.
Escribe el código que para cada <li> muestra:
¿Cuál es el texto dentro de él (sin el subárbol)?
El número de <li> anidados: todos los descendientes, incluidos los profundamente anidados.
*/

for (let li of document.querySelectorAll('li')) {
    // obtener el título del nodo de texto
    let title = li.firstChild.data;

    title = title.trim(); // eliminar los espacios adicionales de los extremos

    // obtener el recuento de descendientes
    let count = li.getElementsByTagName('li').length;

    alert(title + ': ' + count);
  }