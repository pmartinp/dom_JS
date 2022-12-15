"use strict";
// ¿Qué muestra este código?

let body = document.body;
  body.innerHTML = "<!--" + body.tagName + "-->";
  alert( body.firstChild.data ); // ¿qué hay aquí?


// El código muestra "BODY", ya que body.tagName = "BODY", y lo que hacemos en la línea 5 es introducir un
// comentario dentro del body. Aparte la propiedad data del comentario es el contenido del mismo.