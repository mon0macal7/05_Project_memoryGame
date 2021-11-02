//traer data del .json local
fetch("./assets/data/memory.json")
  .then((response) => response.json())
  .then((data) => iterarCards.json(data))
  .catch((error) => console.log(error));

//función para insertar tarjetas

let artCards = document.getElementById("memoCard");

// variable para el área de tarjetas
let iterarCards = (data) => {
  // iterar el objeto
  console.log(data.memory_game);
  for (const ficha of data.memory_Game) {
    // iterar dinámicamente para entrar al objeto
    console.log(ficha.name); // consologear la entrada al objeto
    artCards.innerHTML +=
      // imprimir en HTML
      `
        <div class="card-container">
            <div class="card-portrait">
                <div class="card-cover"></div>
                <div class="card-back">back: ${ficha.image}</div>
            </div>
        </div>
        `;
  }
};

import { searchCard } from "./data.js";
