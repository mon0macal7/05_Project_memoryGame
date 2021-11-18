// Eventos del DOM
import { getPaintCards } from "./data.js";
getPaintCards();

//Botón reset
let reinicio = document.getElementById("reset");
reinicio.addEventListener("click", getPaintCards);

//Esconde la pantalla 1

document.getElementById("screenOne").hidden = false;
document.getElementById("mainPage").hidden = true;

//Acceso con botón play
//funcion pintar nombres de jugadores de scree one a main screen
//ejecutar musica de fondo mientras juegan, inicia cuando se oprime la tecla play de screen one

let jugar = document.getElementById("play");
jugar.addEventListener("click", () => {
  document.getElementById("screenOne").hidden = true;
  document.getElementById("mainPage").hidden = false;
  let musicFondo = document.getElementById("GOT");
  musicFondo.volume = 0.2;
  musicFondo.loop = true;
  musicFondo.play();

  let jugadorUno = document.getElementById("colorA");
  jugadorUno.innerHTML =
    "Player1" + "<br>" + document.getElementById("name1").value + " ";
  let jugadorDos = document.getElementById("colorB");
  jugadorDos.innerHTML =
    "Player2" + "<br>" + document.getElementById("name2").value + " ";
  document.getElementById("scoreP1").innerHTML = 0;
  document.getElementById("scoreP2").innerHTML = 0;
});

//boton volver a screen one
let backScreen1 = document.getElementById("inicio");

backScreen1.addEventListener("click", () => {
  location.reload();
});
backScreen1();
