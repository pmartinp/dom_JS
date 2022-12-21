"use strict";
/* Puede haber más filas en ella.
Escribe el código para ordenarla por la columna "name".
*/

orderByName();

function orderByName() {
  let tBody = document.querySelector("tbody");
  let sortedTr = Array.from(document.querySelectorAll("tbody tr"))
    .sort((rowA, rowB) =>
      rowA.cells[0].textContent.localeCompare(rowB.cells[0].textContent)
    );
    
  tBody.append(...sortedTr);
}
