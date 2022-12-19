"use strict";
/* Escribir una interfaz para crear una lista de lo que ingresa un usuario. Para cada item de la lista:
Preguntar al usuario acerca del contenido usando prompt.
Crear el <li> con ello y agregarlo a <ul>.
Continuar hasta que el usuario cancela el ingreso (presionando Esc o con un ingreso vacío).
Todos los elementos deben ser creados dinámicamente.
Si el usuario ingresa etiquetas HTML, deben ser tratadas como texto.
*/

let ingreso = true;
let ul = document.querySelector("ul");

while(ingreso ?? null){
    let li = document.createElement("li");
    ingreso = prompt("Añade un elemento a la lista");
    if(!ingreso) {
      break;
    }
      li.textContent = ingreso;
      ul.appendChild(li);
}