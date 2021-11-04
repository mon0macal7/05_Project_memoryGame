// Eventos del DOM
import { getPaintCards } from "./data.js";
getPaintCards();

//pseudocodigo de machine card
// definimos variables para guardar las acciones de las cards
let click = false; //boleano
let carta1;
let id1;
let carta2;
let id2;

// declaramos función global scope
window.memoGame = {
  testScope: (cardName) => {
    console.log("click en card:" + cardName);
    //match (empatar las cards con nombres iguales)
  },

  checkMatch: (card_name, card_id) => {
    //boleano

    //voltear card
    let cardFlip = document.getElementById(card_id + "_flip");
    console.log(cardFlip);
    cardFlip.style.transform = "rotateY(180deg)";

    console.log(card_name, card_id);

    if (click == false) {
      //guardar datos en variable boleana para el segundo click T/F
      //primer click con una carta1 y valor1
      carta1 = card_name;
      id1 = card_id;
      click = true;
      alert("primer click a " + carta1 + " " + id1);
    } else {
      //segundo click con otra carta y su valor, card 2 y valor 2

      carta2 = card_name;
      id2 = card_id;

      //alert("segundo click a: " + carta2 + " " + id2)
      click = false;
      if (carta1 == carta2 && id1 != id2) {
        //match en el mismo nombre pero con diferente id
        // comparar si la carta1 == carta2 es un match
        //alert("es un match")
        carta1 = null;
        id1 = null;
        carta2 = null;
        id2 = null; //Aquí se puede hacer función para sonido
      } else {
        //alert("no es match")
        cardFlip.style.transform = ""; //volver carta1
        let cardFlip1 = document.getElementById(id1 + "_flip");
        cardFlip1.style.transform = ""; //volver carta2
        carta1 = null;
        id1 = null;
        carta2 = null;
        id2 = null;
      }
    }
  },
};
