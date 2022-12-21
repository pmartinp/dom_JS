"use strict";
/* ¿Por qué en el código de abajo return false no funciona?*/

function handler() {
    alert( "..." );
    let res = 2+2;
    alert(res);
    return false;
}

/*  Esto sucede porque justo cuando termina de ejecutar la funcion el enlace ya nos redirige
a otra página (siguiente evento), dejando de ejecutar nuestro código JavaScript en dicha otra página.
De manera que, todo lo que devuelva dicha función será inutilizable.
*/