"use strict";
/* Crea una función runOnKeys(func, code1, code2, ... code_n) que ejecute func al presionar simultáneamente las teclas con códigos code1, code2, …, code_n.
Por ejemplo, el siguiente código muestra un alert cuando "Q" y "W" se presionan juntas (en cualquier lenguaje, con o sin mayúscula)
*/

runOnKeys(
  () => alert("¡Hola!"),
  "KeyQ",
  "KeyW"
);

function runOnKeys(func, ...code){
    let pressedKeys = [];
    document.addEventListener('keydown', (event) => {
          pressedKeys.push(event.code);

          for (let i = 0; i < code.length; i++) {
            if (!pressedKeys.includes(code[i])) {
              return false;
            }
          }

          func();
          pressedKeys = [];
      });
      document.addEventListener('keyup', ()=> {
        pressedKeys.shift();
      });
    
}