//Esconde la pantalla 1

document.getElementById("screenOne").hidden = false;
document.getElementById("screenTwo").hidden = true;

//Acceso con botón play

let jugar = document.getElementById("play");
jugar.addEventListener("click", function () {
  document.getElementById("screenOne").hidden = true;
  document.getElementById("screenTwo").hidden = false;
});
