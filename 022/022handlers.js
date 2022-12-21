"use strict";
/* Hay un botón en la variable. No hay handlers en él.
¿Qué handlers se ejecutan con el click después del siguiente código? ¿Qué alertas se muestran?
*/

let button = document.querySelector("button");

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

/* Se muestran las alertas "1" y "2". Esto sucede porque removeEventListener no está funcionando,
ya que la función que se le ha pasado por parámetro no es la misma. Para que funcionase correctamente,
habría que crear una función fuera y pasarsela como parámetro tanto a addEventListener, como a removeEventListener.
*/