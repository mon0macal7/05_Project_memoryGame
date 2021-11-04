//Exportar función para insertar imagen
export let getPaintCards = () => {
  alert("hola");
};

//traer data del .json local
fetch("../data/memory.json")
  .then((response) => response.json())
  .then((data) => iterarCards(data))
  .catch((error) => console.log(error));

//función para insertar tarjetas

let artCards = document.getElementById("memoCard");

// variable para el área de tarjetas
let iterarCards = (data) => {
  // iterar el objeto
  console.log(data.memory_game);
  for (const card of data.memory_game) {
    // iterar dinámicamente para entrar al objeto
    console.log(card.card_name); // entrada al objeto

    //pintar cards dinámicamente
    artCards.innerHTML += `<div class="card-container">
            <div class="card-portrait" id= '${card.card_id}_flip' onclick="checkClick(${card.card_name}','${card.card_id})>
                <div class="card-cover" id= "${card.card_name}"></div>
                <div class="card-back"> <img class="paint" src= "${card.card_image}">
                </div>
              </div>
        </div>`;
  }
};
