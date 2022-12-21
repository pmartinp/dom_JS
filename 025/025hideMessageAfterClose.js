"use strict";
/* Dale funcionalidad al botón de cierre que has creado para la lista de
mensajes del ejercicio anterior. Es decir, haz que funcionen. 
*/

let messages = document.querySelectorAll("div");

for (const iterator of messages) {
    let closeButt = document.createElement("button");
    closeButt.classList.add("closeButt");
    closeButt.textContent = "[X]";

    closeButt.addEventListener("click", () => {
        iterator.remove();
    });

    iterator.insertAdjacentElement("afterbegin", closeButt);
}