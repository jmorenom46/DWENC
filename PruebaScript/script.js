let Pokemon = [
  {
    id: 1,
    name: "pokemon1",
  },
  {
    id: 2,
    name: "pokemon2",
  },
  {
    id: 3,
    name: "pokemon3",
  },
  {
    id: 4,
    name: "pokemon4",
  },
  {
    id: 5,
    name: "pokemon5",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("dynamic-list");
  const boton = document.getElementById("add-item-btn");
  let counter = 1;

  Pokemon.forEach((Pokemon) => {
    const newItem = document.createElement("li");

    newItem.textContent = `Pokemon ${Pokemon.name}`;

    list.appendChild(newItem);
  });
});
