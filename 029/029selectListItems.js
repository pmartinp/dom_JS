"use strict";
/* Cree una lista donde los elementos son seleccionables, como en los administradores de archivos.
Un clic en un elemento de la lista selecciona solo ese elemento (agrega la clase .selected),
deselecciona todos los demás. Si se hace un clic con Ctrl (Cmd para Mac), el estado seleccionado/deseleccionado
cambia para ese solo elemento, los otros elementos no se modifican.
PD: Para esta tarea, podemos suponer que los elementos de la lista son solo de texto. 
No hay etiquetas anidadas. Evita la selección nativa del navegador del texto en los clics.
*/

let ul = document.querySelector("ul");

// Restringimos la selección nativa del navegador
ul.onmousedown = function () {
  return false;
};

let li = document.querySelectorAll("li");

for (const iterator of li) {
    iterator.addEventListener("click", (event) =>{
        if(event.ctrlKey){
            iterator.classList.add("selected");
        } else{
            for (const iterator of li) {
                iterator.classList.remove("selected");
            }
            iterator.classList.add("selected");
        }
    });
}