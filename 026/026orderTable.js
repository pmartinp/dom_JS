"use strict";
/* : Haz que la tabla se pueda ordenar: los clics en elementos <th>
deberían ordenarla por la columna correspondiente. Cada <th> tiene
su tipo de datos en el atributo, como esto:
*/

orderTable();

function orderTable() {
  let tBody = document.querySelector("tbody");
  let tr = Array.from(document.querySelectorAll("tbody tr"));

  let age = document.getElementById("age");
  let names = document.getElementById("name");

  age.addEventListener("click", () => {
    sortRows(tr, 0, age.getAttribute("data-type"));
    tBody.append(...tr);
  });

  names.addEventListener("click", () => {
    sortRows(tr, 1, names.getAttribute("data-type"));
    tBody.append(...tr);
  });
}

function sortRows(elem, index, type) {
  if (type == "number") {
    elem.sort(
      (rowA, rowB) =>
        rowA.cells[index].textContent - rowB.cells[index].textContent
    );
  } else if (type == "string") {
    elem.sort((rowA, rowB) =>
      rowA.cells[index].textContent.localeCompare(rowB.cells[index].textContent)
    );
  }
}