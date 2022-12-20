"use strict";
/* Reloj coloreado con setInterval
Usa HTML/CSS para el estilo, JavaScript solamente actualiza la hora en elements.
*/

let hour = document.getElementById("h");
let min = document.getElementById("m");
let sec = document.getElementById("s");

let clock;

function start() {
  if (!clock) {
    clock = setInterval(function () {
      let date = new Date();
      let timeH = date.getHours();
      let timeM = date.getMinutes();
      let timeS = date.getSeconds();

      hour.textContent = timeH;
      min.textContent = timeM;
      sec.textContent = timeS;
    }, 1000);
  }
}

function stop() {
  clearInterval(clock);
  clock = 0;
}
