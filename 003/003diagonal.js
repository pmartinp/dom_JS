"use strict"
/* Seleccionar todas las celdas diagonales Escribe el código para
pintar todas las celdas diagonales de rojo. Necesitarás obtener todas
las <td> de la <table> y pintarlas usando el código:
td debe ser la referencia a la celda de la tabla
*/

let diagonal = document.querySelectorAll("td");

for (let index = 0; index < diagonal.length; index++) {
    if (index==0 || index%6==0) {
        diagonal[index].classList.add("bg-danger");     
    }  
}