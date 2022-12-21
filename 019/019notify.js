"use strict";
/* Escribir una función showNotification(options) que cree una notificación:
<div class="notification"> con el contenido dado. La notificación debería
desaparecer automáticamente después de 1.5 segundos. Las opciones son:
*/
// muestra un elemento con el texto "Hello" cerca de la parte superior de la ventana
showNotification({
  top: 10, // 10px desde la parte superior de la ventana (por defecto es 0px)
  right: 10, // 10px desde el borde derecho de la ventana (por defecto es 0px)
  html: "Hello!", // el HTML de la notificación
  className: "welcome" // una clase adicional para el "div" (opcional)
});
// Usar posicionamiento CSS para mostrar el elemento en las coordenadas (top/right) dadas.

function showNotification(options){
    let div = document.createElement("div"); // creamos el div
    
    let divClass = ["notification", options["className"]];
    div.classList.add(...divClass); // introducimos las clases correspondientes del div
    div.innerHTML = options["html"]; // introducimos el html correspondiente

    div.style.top = options["top"];
    div.style.right = options["right"];

    document.body.append(div); // lo insertamos dentro del body

    // función que borrará el div una vez pase 1,5s
    setTimeout(function(){
        document.body.remove(div);
    },1500)
}
