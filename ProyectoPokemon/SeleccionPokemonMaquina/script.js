let idMaquina = null;
idMaquina = Math.floor(Math.random() * pokemons.length) + 1;
let PokemonJugadorCookie = null;
let Maquina = pokemons[idMaquina];
const isShiny = Math.random() < 0.01;
const imgPokeMaquina = isShiny
  ? Maquina.img.replace("normal-sprite", "shiny-sprite")
  : Maquina.img;
if (isShiny) {
  Maquina.isShiny = true;
}

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("vs");
  list.classList.add("vs");
  PokemonJugadorCookie = getCookie();
  Jugador = JSON.parse(PokemonJugadorCookie);
  const imgPoke = Jugador.isShiny
    ? Jugador.img.replace("normal-sprite", "shiny-sprite")
    : Jugador.img;
  const PokemonJugador = document.createElement("div");
  if (Jugador.isShiny) {
    PokemonJugador.classList.add("pokemonShiny");
    PokemonJugador.innerHTML = `<img src=${imgPoke} class="imagenPokemon"/><br>
  <p class="Nombre, Shiny">${Jugador.name} ★</p>`;
  } else {
    PokemonJugador.classList.add("pokemon");
    PokemonJugador.innerHTML = `<img src=${imgPoke} class="imagenPokemon"/><br>
  <p class="Nombre">${Jugador.name}</p>`;
  }
  list.appendChild(PokemonJugador);
  const ImgVS = document.createElement("div");
  ImgVS.classList.add("divImagen");
  ImgVS.innerHTML = `<img src="../Images/VS.png" class="imagenVS"/>`;
  list.appendChild(ImgVS);
  const PokemonMaquina = document.createElement("div");
  if (Maquina.isShiny) {
    PokemonMaquina.classList.add("pokemonShiny");
    PokemonMaquina.innerHTML = `<img src=${imgPokeMaquina} class="imagenPokemon"/><br>
  <p class="Nombre, Shiny">${Maquina.name} ★</p>`;
  } else {
    PokemonMaquina.classList.add("pokemon");
    PokemonMaquina.innerHTML = `<img src=${imgPokeMaquina} class="imagenPokemon"/><br>
  <p class="Nombre">${Maquina.name}</p>`;
  }
  list.appendChild(PokemonMaquina);
});

function getCookie() {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let c = cookie.trim();
    if (c.startsWith(`PokemonJugador=`)) return c.substring(15);
  }
  return null;
}

function Continuar() {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const pokemonData = JSON.stringify(Maquina);
  document.cookie = `PokemonMaquina=${pokemonData}; ${expires}; path=/`;
  setMaxHealthJugadorCookie();
  setMaxHealthMaquinaCookie();
  window.location.href = "../Combate/Combate.html";
}

function setMaxHealthJugadorCookie() {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const pokemonData = JSON.stringify(Jugador.hp);
  document.cookie = `JugadorMhp=${pokemonData}; ${expires}; path=/`;
}
function setMaxHealthMaquinaCookie() {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const pokemonData = JSON.stringify(Maquina.hp);
  document.cookie = `MaquinaMhp=${pokemonData}; ${expires}; path=/`;
}

function Mostrar() {}
