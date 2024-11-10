let moves = [];
let PokemonAnterior = null;
let PokemonJugador = [];
let PokemonOponente = [];
let PokemonJ = null;
const BtnContinuar = document.getElementById("Continuar");

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("pokedex");
  for (let i = 0; i < pokemons.length; i++) {
    const isShiny = Math.random() < 0.01;
    const imgPoke = isShiny
      ? pokemons[i].img.replace("normal-sprite", "shiny-sprite")
      : pokemons[i].img;
    if (isShiny) {
      pokemons[i].isShiny = true;
    }
    const newPokemon = document.createElement("div");
    if (isShiny) {
      newPokemon.classList.add("pokemonShiny");
    } else {
      newPokemon.classList.add("pokemon");
    }
    newPokemon.id = pokemons[i].id;
    newPokemon.onclick = function () {
      SeleccionarPokemon(this.id);
    };
    if (isShiny) {
      if (pokemons[i].types.length > 1) {
        if (pokemons[i].types[0] == "Grass") {
        }
        newPokemon.innerHTML = `<img src=${imgPoke} /><br>
        <p class="Parrafo, Shiny">Nº: ${pokemons[i].id}</p>
        <p class="Parrafo, Shiny">${pokemons[i].name} ★</p>
        <div class="tipos">
        <p class="${pokemons[i].types[0]}">${pokemons[i].types[0]}</p>
        <p class="${pokemons[i].types[1]}">${pokemons[i].types[1]}</p>`;
        list.appendChild(newPokemon);
      } else {
        newPokemon.innerHTML = `<img src=${imgPoke} /><br>
        <p class="Parrafo, Shiny">Nº: ${pokemons[i].id}</p>
        <p class="Parrafo, Shiny">${pokemons[i].name} ★</p>
        <div class="tipos">
        <p class="${pokemons[i].types[0]}">${pokemons[i].types[0]}</p>`;
        list.appendChild(newPokemon);
      }
    } else {
      if (pokemons[i].types.length > 1) {
        if (pokemons[i].types[0] == "Grass") {
        }
        newPokemon.innerHTML = `<img src=${imgPoke} /><br>
        <p class="Parrafo">Nº: ${pokemons[i].id}</p>
        <p class="Parrafo">${pokemons[i].name}</p>
        <div class="tipos">
        <p class="${pokemons[i].types[0]}">${pokemons[i].types[0]}</p>
        <p class="${pokemons[i].types[1]}">${pokemons[i].types[1]}</p>`;
        list.appendChild(newPokemon);
      } else {
        newPokemon.innerHTML = `<img src=${imgPoke} /><br>
        <p class="Parrafo">Nº: ${pokemons[i].id}</p>
        <p class="Parrafo">${pokemons[i].name}</p>
        <div class="tipos">
        <p class="${pokemons[i].types[0]}">${pokemons[i].types[0]}</p>`;
        list.appendChild(newPokemon);
      }
    }
  }
});

function Aleatorio() {
  let NumPokemon = Math.floor(Math.random() * pokemons.length)+1;
  PokemonJugador = pokemons[NumPokemon];
  PokemonJ = document.getElementById(NumPokemon);
  PokemonJ.classList.remove("pokemon");
  PokemonJ.classList.add("seleccionado");
  BtnContinuar.disabled = false;
  if (PokemonAnterior != null) {
    const PokemonA = document.getElementById(PokemonAnterior);
    PokemonA.classList.remove("seleccionado");
    PokemonA.classList.add("pokemon");
  }
  PokemonAnterior = NumPokemon + 1;
}
function Continuar() {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const pokemonData = JSON.stringify(PokemonJugador);
  document.cookie = `PokemonJugador=${pokemonData}; ${expires}; path=/`;
  window.location.href = "../SeleccionPokemonMaquina/Maquina.html";
}
function SeleccionarPokemon(id) {
  if (PokemonAnterior != id) {
    PokemonJugador = pokemons[id - 1];
    PokemonJ = document.getElementById(id);
    PokemonJ.classList.remove("pokemon");
    PokemonJ.classList.add("seleccionado");
    BtnContinuar.disabled = false;
    if (PokemonAnterior != null) {
      const PokemonA = document.getElementById(PokemonAnterior);
      PokemonA.classList.remove("seleccionado");
      PokemonA.classList.add("pokemon");
    }
    PokemonAnterior = id;
  }
}
function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let c = cookie.trim();
    if (c.startsWith(`${name}=`)) return c.substring(name.length + 1);
  }
  return null;
}
