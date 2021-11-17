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
  document.getElementById("GOT").play();
  let jugadorUno = document.getElementById("colorA");
  jugadorUno.innerHTML =
    "Player1" + "<br>" + document.getElementById("name1").value + " ";
  let jugadorDos = document.getElementById("colorB");
  jugadorDos.innerHTML =
    "Player2" + "<br>" + document.getElementById("name2").value + " ";
});

//y debe terminar cuando ya no haya cards en el tablero

//traer tarjetas y darles visibilidad
/*const reinicio = document.querySelecctorAll("card-portrait");
reinicio.visibility = "";*/
