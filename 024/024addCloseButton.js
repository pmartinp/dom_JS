"use strict";
/* Agregar un botón de cierre: Hay una lista de mensajes.
Usa JavaScript para agregar un botón de cierre en la esquina superior derecha de
cada mensaje. El resultado debería verse algo así:
*/

let messages = document.querySelectorAll("div");

for (const iterator of messages) {
    let closeButt = document.createElement("button");
    closeButt.classList.add("closeButt");
    closeButt.textContent = "[X]";

    iterator.insertAdjacentElement("afterbegin", closeButt);
}