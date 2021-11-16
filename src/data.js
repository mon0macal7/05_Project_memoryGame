let artCards = document.getElementById("memoCard");
//Exportar función para insertar imagen
export let getPaintCards = () => {
  alert("A JUGAR");
  artCards.innerHTML = "";
  let scoreP1 = 0;
  let scoreP2 = 0;
  document.getElementById("scoreP1").innerHTML = scoreP1;
  document.getElementById("scoreP2").innerHTML = scoreP2;

  //traer data del .json local
  fetch("../data/memory.json")
    .then((response) => response.json())
    .then((data) => iterarCards(data))
    .catch((error) => console.log(error));
};

//función para insertar tarjetas

// variable para el área de tarjetas
let iterarCards = (data) => {
  // arreglo desde JSON

  // iterar el objeto
  console.log(data.memory_game);
  //AQUI VA EL SORT para revolver cartas
  data.memory_game.sort(() => Math.random() - 0.5);

  for (const card of data.memory_game) {
    // iterar dinámicamente para entrar al objeto
    console.log(card.card_name); // entrada al objeto

    //pintar cards dinámicamente
    artCards.innerHTML += `<div class="card-container">
            <div class="card-portrait" id='${card.card_id}_flip' onclick="checkClick('${card.card_name}',
            '${card.card_id}')">
                <div class="card-cover" id= '${card.card_name}'></div>
                <div class="card-back" id= '${card.card_id}'> <img class="paint" src= "${card.card_image}">
                </div>
              </div>
        </div>`;
  }
};
