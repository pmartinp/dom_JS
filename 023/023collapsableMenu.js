"use strict";
/* Crea un menú que se abra/colapse al hacer click. 
*/

let dropdownTrigger = document.getElementById("dropdownID");

dropdownTrigger.addEventListener("click", () =>{
    let dropdownItem = document.getElementById("dropdownItem");
    
    dropdownItem.className=="none" ?
    dropdownItem.classList.remove("none"):
    dropdownItem.classList.add("none");
})