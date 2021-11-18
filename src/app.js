//y debe terminar cuando ya no haya cards en el tablero

//traer tarjetas y darles visibilidad
/*const reinicio = document.querySelecctorAll("card-portrait");
reinicio.visibility = "";*/

//app.js

//pseudocódigo de machine card
// definimos variables para guardar las acciones de las cards
let click = false; //boleano
let carta1;
let id1;
let carta2;
let id2;
let turn = true;
let scoreP1 = 0;
let scoreP2 = 0;
document.getElementById("scoreP1").innerHTML = scoreP1;
document.getElementById("scoreP2").innerHTML = scoreP2;

document.getElementById("colorA").style.color = "#5DD9C1";

// declaramos función global scope
window.memoGame = {
  testScope: (card_name) => {
    console.log("click en card:" + card_name);
    //match (empatar las cards con nombres iguales)
  },

  checkMatch: (card_name, card_id) => {
    //boleano

    //voltear card
    let cardFlip = document.getElementById(card_id + "_flip");

    console.log(cardFlip);
    cardFlip.style.transform = "rotateX(180deg)";

    console.log(card_name, card_id);

    if (click == false) {
      //guardar datos en variable boleana para el segundo click T/F
      //primer click con una carta1 y valor1
      carta1 = card_name;
      id1 = card_id;
      click = true;
      //alert("primer click a " + carta1 + " " + id1);
    } else {
      //segundo click con otra carta y su valor, card 2 y valor 2

      carta2 = card_name;
      id2 = card_id;

      //alert("segundo click a: " + carta2 + " " + id2);
      click = false;
      if (carta1 == carta2 && id1 != id2) {
        correcta(); //match en el mismo nombre pero con diferente id
        // comparar si la carta1 == carta2 es un match
        //alert("es un match");
        //agregar time set out
        setTimeout(() => {
          let cardFlip1 = document.getElementById(id1 + "_flip");
          cardFlip1.style.visibility = "hidden";
          let cardFlip2 = document.getElementById(id2 + "_flip");
          cardFlip2.style.visibility = "hidden";
          carta1 = null;
          id1 = null;
          carta2 = null;
          id2 = null;
        }, 1000);

        //guardar puntaje de player 1
        if (turn) {
          console.log("turno player2");
          turn = false;
          scoreP1++;
          console.log(scoreP1);
          document.getElementById("scoreP1").innerHTML = scoreP1;
          document.getElementById("colorA").style.color = "#190933";
          document.getElementById("colorB").style.color = "#5DD9C1";
          //activar funcion ganador
          endGame(scoreP1, scoreP2);
        } else {
          console.log("turno player1");
          turn = true;
          scoreP2++;
          console.log(scoreP2);
          document.getElementById("scoreP2").innerHTML = scoreP2;
          document.getElementById("colorA").style.color = "#5DD9C1";
          document.getElementById("colorB").style.color = "#190933";
          //activar funcion ganador
          endGame(scoreP1, scoreP2);
        }

        //Aquí se puede hacer función para sonido
      } else {
        //alert("no es match")
        //agregar set time out
        invalidAnswer();
        setTimeout(() => {
          cardFlip.style.transform = ""; //volver carta1
          let cardFlip1 = document.getElementById(id1 + "_flip");
          cardFlip1.style.transform = ""; //volver carta2
          carta1 = null;
          id1 = null;
          carta2 = null;
          id2 = null;
        }, 1000);

        if (turn) {
          console.log("turno player2");
          turn = false;
          document.getElementById("colorA").style.color = "#190933";
          document.getElementById("colorB").style.color = "#5DD9C1";
        } else {
          console.log("turno player1");
          turn = true;
          document.getElementById("colorA").style.color = "#e36477";
          document.getElementById("colorB").style.color = "#5DD9C1";
        }
      }
    }
  },
};

let correcta = () => {
  const right = document.getElementById("valid");
  right.play();
};

let invalidAnswer = () => {
  const wrong = document.getElementById("invalid");
  wrong.volume = 0.1;
  wrong.play();
};

let winner = () => {
  const win = document.getElementById("ganador");
  win.play();
};
/*
let winner = document.getElementById("ganador");
winner.addEventListener("click", () => {
});*/

//alert ganadores
function endGame(scoreP1, scoreP2) {
  //Agregamos un setTimeout para que las alertas no salgan antes de que termine el juego
  setTimeout(() => {
    if (scoreP1 + scoreP2 == 8) {
      if (scoreP1 > scoreP2) {
        winner();
        alert(
          `Felicidades, ${
            document.getElementById("name1").value
          }, tenés la memoria de  un artista!!`
        );
      } else {
        if (scoreP1 < scoreP2) {
          winner();
          alert(
            `Felicidades, ${
              document.getElementById("name2").value
            },tu victoria se ha consumado !!`
          );
        } else {
          alert("Esto fue un empate");
        }
      }
    }
  }, 200);
}
export let playAgain = () => {
  scoreP1 = 0;
  scoreP2 = 0;
  document.getElementById("scoreP1").innerHTML = scoreP1;
  document.getElementById("scoreP2").innerHTML = scoreP2;
};
