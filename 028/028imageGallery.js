"use strict";
/* Crea una galería de imágenes donde la imagen principal cambia al hacer 
clic en una miniatura. Como en Amazon, por ejemplo.*/

let imgMain = document.getElementById("img-main");

let imgSecondary = document.querySelectorAll("#img-secondary");

for (const iterator of imgSecondary) {
    iterator.addEventListener("click", () =>{
        let srcSecondary = iterator.getAttribute("src");
        
        imgMain.setAttribute("src", srcSecondary);
    });
}