import { KUTYAK } from ".index.js";
kepekDivbe();
megmutatGomb();

function kepekDivbe(){
    const KEPEK = document.getElementById("image").src = "kepek/nemetjuhasz.jpg";
    KEPEK = document.getElementById("image").src = "kepek/labrador.jpg";
    KEPEK = document.getElementById("image").src = "kepek/franciabulldog.jpg";
    KEPEK = document.getElementById("image").src = "kepek/tacsko.jpg";
    KEPEK = document.getElementById("image").src = "kepek/csivava.jpg";
    
}

function megmutatGomb(){
    const GOMB = document.getElementById("megmutatGomb");
    GOMB.addEventListener("click", megmutatGomb)
    
}
