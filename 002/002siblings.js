"use strict";
/* Si elem – es un elemento nodo arbitrario del DOM…
¿Es cierto que elem.lastChild.nextSibling siempre es null?
Si, es cierto, ya que estamos queriendo acceder al siguiente nodo hermano. Lo cual,
es imposible, ya que no existe siguiente al último.

¿Es cierto que elem.children[0].previousSibling siempre es null ?
No, no es cierto, devuelve "[object Text]". Ya que el anterior nodo al hijo es el propio
elemento padre.

Demúestralo.
*/

let elem = document.getElementsByTagName("ul");
alert(elem[0].lastChild.nextSibling);
alert(elem[0].children[0].previousSibling);