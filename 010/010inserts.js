"use strict";
/* createTextNode vs innerHTML vs textContent: Tenemos un elemento DOM
vacio elem y un string text. ¿Cuáles de estos 3 comandos harán 
exactamente lo mismo? Pon un ejemplo.
*/
let text = 'texto';

elem1.append(document.createTextNode(text))
elem2.innerHTML = text
elem3.textContent = text

// El 1 y el 3 son los que agregan "texto" dentro de elem