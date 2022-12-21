"use strict";
/* Agrega JavaScript al button para hacer que <div id="text"> desaparezca al hacerle click.
*/

function clearText(){
    let div = document.getElementById("text");

    div.remove();
}