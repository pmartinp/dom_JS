"use strict";
/* Inserta el HTML en la lista. Escribe el código para
insertar <li>2</li><li>3</li> entre dos <li> aquí:
*/

let one = document.getElementById("one");

/* El método "insertAdjacentHTML", inserta el código html que queramos en la posición
relativa que indiquemos al elemento sobre el que lo llamemos. */
one.insertAdjacentHTML("afterend","<li>2</li><li>3</li>");