//Esconde la pantalla 1

document.getElementById("screenOne").hidden = false;
document.getElementById("mainPage").hidden = true;

//Acceso con botón play

let jugar = document.getElementById("play");
jugar.addEventListener("click", () => {
  document.getElementById("screenOne").hidden = true;
  document.getElementById("mainPage").hidden = false;
});

//funcion pintar nombres de jugadores de screen one a main screen
let jugadorUno = document.getElementById("name1");
jugadorUno.innerHTML = "player1" + document.getElementById("name1").value + ":";
let jugadorDos = document.getElementById("name2");
jugadorDos.innerHTML = "player2" + document.getElementById("name2").value + ":";

//traer tarjetas y darles visibilidad
/*const reinicio = document.querySelecctorAll("card-portrait");
reinicio.visibility = "";*/
