//Esconde la pantalla 1

document.getElementById("screenOne").hidden = false;
document.getElementById("mainPage").hidden = true;

//Acceso con botón play

let jugar = document.getElementById("play");
jugar.addEventListener("click", function () {
  document.getElementById("screenOne").hidden = true;
  document.getElementById("mainPage").hidden = false;
});
