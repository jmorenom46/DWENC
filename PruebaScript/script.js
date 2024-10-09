let Pokemon = [
  {
    id: 1,
    name: "pokemon1",
    type: "water",
  },
  {
    id: 2,
    name: "pokemon2",
    type: "grass",
  },
  {
    id: 3,
    name: "pokemon3",
    type: "ice",
  },
  {
    id: 4,
    name: "pokemon4",
    type: "rock",
  },
  {
    id: 5,
    name: "pokemon5",
    type: "fire",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("dynamic-list");
  const boton = document.getElementById("add-item-btn");
  let counter = 1;

  Pokemon.forEach((Pokemon) => {
    const newItem = document.createElement("li");

    //newItem.textContent = `Pokemon ${Pokemon.name} `;
    newItem.innerHTML = `<p>Pokemon ${Pokemon.name}</p><br>
    <p>${Pokemon.type}</p>`;

    list.appendChild(newItem);
  });

  boton.addEventListener("click", function () {
    const newItem = document.createElement("li");

    //newItem.textContent = `Pokemon ${Pokemon.name} `;
    newItem.innerHTML = `<p>Elemento dinamico ${counter}</p>`;

    list.appendChild(newItem);
    counter++;
  });
});
