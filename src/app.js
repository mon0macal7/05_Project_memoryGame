//Esconde la pantalla 1

document.getElementById("screenOne").hidden = false;
document.getElementById("mainPage").hidden = true;

//Acceso con botón play

let jugar = document.getElementById("play");
jugar.addEventListener("click", () => {
  document.getElementById("screenOne").hidden = true;
  document.getElementById("mainPage").hidden = false;
});

//funcion pintar nombres de jugadores de scree one a main screen
let jugadorUno = document.getElementById("colorA");
jugadorUno.innerHTML = document.getElementById("name1").value + " ";
let jugadorDos = document.getElementById("colorB");
jugadorDos.innerHTML =
  "player2" + "<br>" + document.getElementById("name2").value + " ";

//traer tarjetas y darles visibilidad
/*const reinicio = document.querySelecctorAll("card-portrait");
reinicio.visibility = "";*/
