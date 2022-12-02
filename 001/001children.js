"use strict";
//Para cada una de las siguientes preguntas, da al menos una forma de cómo acceder a ellos:
//¿El nodo <div> del DOM?*/
let box = document.getElementsByTagName("div");
alert(box[0].textContent);

//¿El nodo <ul> del DOM?
let ul = document.getElementsByTagName("ul");
alert(ul[0].textContent);

//El segundo <li> (con Peter Parker)?
let secondLI = document.querySelector("li:nth-child(2n)");
alert(secondLI.textContent);