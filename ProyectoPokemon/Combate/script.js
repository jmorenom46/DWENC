let Jugador = null;
let Maquina = null;
let JugadorDmgMultiplier = 1;
let MaquinaDmgMultiplier = 1;
let ToggleAtaque = false;
let JugadorMhp = null;
let MaquinaMhp = null;
const PantallaCombate = document.getElementById("combate");
const PantallaBotones = document.getElementById("botones");
const PantallaMovimientos = document.getElementById("movimientos");
const PantallaLog = document.getElementById("log");

const Tipos = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Steel",
  "Fairy",
];

const Efectividad = [
  [1, 1, 1, 1, 1, 0.5, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0.5, 1], // Normal
  [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5], // Fighting
  [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1], // Flying
  [1, 1, 1, 0.5, 0.5, 0.5, 2, 0.5, 1, 1, 2, 1, 1, 1, 1, 0, 2], // Poison
  [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 2, 1], // Ground
  [1, 0.5, 2, 1, 0.5, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 0.5, 1], // Rock
  [1, 0.5, 0.5, 2, 1, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1, 0.5, 0.5], // Bug
  [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1], // Ghost
  [1, 1, 1, 1, 1, 0.5, 2, 1, 0.5, 0.5, 2, 1, 1, 2, 0.5, 2, 1], // Fire
  [1, 1, 1, 1, 2, 2, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1], // Water
  [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 2, 0.5, 1, 1, 1, 0.5, 0.5, 1], // Grass
  [1, 1, 2, 1, 0, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1], // Electric
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 0.5, 1], // Psychic
  [1, 1, 2, 1, 2, 1, 1, 1, 1, 0.5, 2, 1, 1, 0.5, 2, 0.5, 1], // Ice
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0.5, 0], // Dragon
  [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 0.5, 1, 2, 1, 0.5, 2], // Steel
  [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 2, 0.5, 1], // Fairy
];

function getEfectividad(tipoAtaque, tipoDefensor) {
  const Atacante = TIPOS.indexOf(tipoAtaque);
  const Defensor = TIPOS.indexOf(tipoDefensor);
  return Efectividad[Atacante][Defensor];
}

document.addEventListener("DOMContentLoaded", function () {
  Jugador = JSON.parse(getCookie("PokemonJugador"));
  Maquina = JSON.parse(getCookie("PokemonMaquina"));
  JugadorMhp = Jugador.hp;
  MaquinaMhp = Maquina.hp;
  MostrarCombate();
});

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let c = cookie.trim();
    if (c.startsWith(`${name}=`)) return c.substring(name.length + 1);
  }
  return null;
}

function MostrarCombate() {
  const imgPoke = Jugador.isShiny
    ? Jugador.img.replace("normal-sprite", "shiny-sprite")
    : Jugador.img;
  const imgPokeMaquina = Maquina.isShiny
    ? Maquina.img.replace("normal-sprite", "shiny-sprite")
    : Maquina.img;
  const PokemonJugador = document.createElement("div");
  console.log(Jugador.hp);
  if (Jugador.isShiny) {
    PokemonJugador.classList.add("pokemonShiny");
    PokemonJugador.innerHTML = `<img src=${imgPoke} class="imagenPokemon"/><br>
  <p class="Nombre, Shiny">${Jugador.name} ★</p>
  <div class="barraVida"><p class="Vida">${Jugador.hp}/${JugadorMhp}</p></div>`;
  } else {
    PokemonJugador.classList.add("pokemon");
    PokemonJugador.innerHTML = `<img src=${imgPoke} class="imagenPokemon"/><br>
  <p class="Nombre">${Jugador.name}</p>
  <div class="barraVida"><p class="Vida">${Jugador.hp}/${JugadorMhp}</p></div>`;
  }
  PantallaCombate.appendChild(PokemonJugador);
  const PokemonMaquina = document.createElement("div");
  if (Maquina.isShiny) {
    PokemonMaquina.classList.add("pokemonShiny");
    PokemonMaquina.innerHTML = `<img src=${imgPokeMaquina} class="imagenPokemon"/><br>
  <p class="Nombre, Shiny">${Maquina.name} ★</p>
  <div class="barraVida"><p class="Vida">${Maquina.hp}/${MaquinaMhp}</p></div>`;
  } else {
    PokemonMaquina.classList.add("pokemon");
    PokemonMaquina.innerHTML = `<img src=${imgPokeMaquina} class="imagenPokemon"/><br>
  <p class="Nombre">${Maquina.name}</p>
  <div class="barraVida"><p class="Vida">${Maquina.hp}/${MaquinaMhp}</p></div>`;
  }
  PantallaCombate.appendChild(PokemonMaquina);

  PantallaBotones.classList.add("boton");
  const BotonLucha = document.createElement("button");
  BotonLucha.classList.add("botonAtacar");
  BotonLucha.innerHTML = `<p>Atacar</p>`;
  BotonLucha.addEventListener("click", function () {
    ToggleVisibility();
  });
  PantallaBotones.appendChild(BotonLucha);
  const BotonHeal = document.createElement("button");
  BotonHeal.classList.add("botonHeal");
  BotonHeal.innerHTML = `<p>Curarse</p>`;
  BotonHeal.addEventListener("click", function () {
    BotonHeal(Jugador);
  });
  PantallaBotones.appendChild(BotonHeal);

  const PantallaMovimientos = document.getElementById("movimientos");
  for (let i = 0; i < Jugador.moves.length; i++) {
    const Boton = document.createElement("button");
    Boton.classList.add("botonMovimientos");
    Boton.classList.add(Jugador.moves[i].type);
    console.log(Jugador.moves[i].type);
    Boton.innerHTML = `<p>${Jugador.moves[i].move}</p><br>
    <p>${Jugador.moves[i].type}</p>`;
    Boton.addEventListener("click", function () {
      Attack(Jugador.moves[i].move,Jugador.moves[i].type ,Maquina.types);
      ToggleVisibility();
    });
    PantallaMovimientos.appendChild(Boton);
  }
  const BotonSalir = document.createElement("button");
  BotonSalir.classList.add("botonSalir");
  BotonSalir.innerHTML = `<p>Volver</p>`;
  BotonSalir.addEventListener("click", function () {
    ToggleVisibility();
  });
  PantallaMovimientos.appendChild(BotonSalir);
  PantallaMovimientos.style.visibility = "hidden";
  PantallaMovimientos.style.display = "none";
}

function Attack(Move, MoveType, OpnenentTypes) {
  const log = document.createElement("p");
  log.innerHTML = `${Jugador.name} ha usado ${Move}, de tipo ${MoveType}, contra ${Maquina.name} de tipo ${OpnenentTypes}`;
  PantallaLog.appendChild(log);
}

function ToggleVisibility() {
  if (ToggleAtaque) {
    PantallaBotones.style.visibility = "visible";
    PantallaBotones.style.display = "";
    PantallaMovimientos.style.visibility = "hidden";
    PantallaMovimientos.style.display = "none";
    ToggleAtaque = false;
  } else {
    PantallaBotones.style.visibility = "hidden";
    PantallaBotones.style.display = "none";
    PantallaMovimientos.style.visibility = "visible";
    PantallaMovimientos.style.display = "";
    ToggleAtaque = true;
  }
}

function BlockToggleVisibility() {
  
}
