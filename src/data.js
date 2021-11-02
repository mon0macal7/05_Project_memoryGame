//Exportar función para insertar imagen
export let getPaintCards = () => {};
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
  for (const card of data.memory_Game) {
    // iterar dinámicamente para entrar al objeto
    console.log(card.name); // consologear la entrada al objeto
    artCards.innerHTML += `<div class="card-container">
            <div class="card-portrait">
                <div class="card-cover" id= "${card.card_name}"></div>
                <div class="card-back">back: ${card.card_image}</div>
            </div>
        </div>`;
  }
};
