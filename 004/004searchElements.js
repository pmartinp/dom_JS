"use strict";
/* Aquí está el documento con la tabla y el formulario.
¿Cómo encontrar?…
*/
//La tabla con id="age-table".
let table = document.getElementById("age-table");
alert(table.innerHTML);

//Todos los elementos labeldentro de la tabla (debería haber 3).
let label = document.querySelectorAll("table label");
alert(label.length);

//El primer td en la tabla (con la palabra “Age”).
let firstTD = document.querySelector("table td");
alert(firstTD.textContent);

//El form con name="search".
let formName = document.querySelector("form[name='search']");
alert(formName.innerHTML)

//El primer input en ese formulario.
let firstInput = document.querySelector("form[name='search'] input");
alert(firstInput);

//El último input en ese formulario.
let lastInput = document.querySelector("form input:last-child");
alert(lastInput);