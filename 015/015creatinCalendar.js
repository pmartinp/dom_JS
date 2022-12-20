"use strict";
/* Escribe una función createCalendar(elem, year, month).
Su llamado debe crear un calendario para el año y mes dados y ponerlo
dentro de elem. El calendario debe ser una tabla, donde una semana es
<tr>, y un día es<td>. Los encabezados de la tabla deben ser <th> con
los nombres de los días de la semana: el primer día debe ser “lunes” y así hasta “domingo”.

P.S. Para esta tarea es suficiente generar el calendario, no necesita aún ser pulsable. 
Por ejemplo, createCalendar(cal, 2012, 9) debe generar en el elemento cal el siguiente calendario: 
*/

let cal = document.getElementById("calendar");

createCalendar(cal, 2012, 9);

function createCalendar(elem, year, month){
  let table = document.createElement("table");

  let daysLetter = document.createElement("thead");
  let daysArrays = ["MO", "TU", "WE", "TH", "FR", "SA","SU"];
  let theadRow = document.createElement("tr");

  for (const iterator of daysArrays) { // añadimos los días en su formato de carácter a la cabecera
    theadRow.innerHTML += "<th>"+iterator+"</th>";
  }

  daysLetter.append(theadRow);

  let totalDays = new Date(year, month, 0).getDate(); // días totales del mes (último día)
  let firstDay = new Date(year, month-1, 1).getDay(); // obtenemos en que cae el primer día del mes

  let calBody = document.createElement("tbody");

  let days = 0;
  for (let index = 0; days < totalDays; index++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      let day = document.createElement("td");

      if (index == 0 && j < firstDay -1){
        day.innerText = " ";
      } else if(days >= totalDays){
        break;
      }
      else{
        day.textContent = ++days;
      }
      row.append(day);
    }
    calBody.append(row);
  }

  table.append(daysLetter);
  table.append(calBody);

  elem.append(table);
}