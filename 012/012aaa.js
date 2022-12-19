"use strict";
/* En el ejemplo de abajo, la llamada table.remove() quita la tabla del documento.
Pero si la ejecutas, puedes ver que el texto “aaa”` es aún visible. ¿Por qué ocurre esto?
*/

alert(table); // la tabla, tal como debería ser
table.remove();

// ¿Por qué aún está "aaa" en el documento?
// Esto se debe a que el texto "aaa" no forma parte del html interno de la tabla.