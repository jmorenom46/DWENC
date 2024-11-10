let Jugador = null;
let Maquina = null;
let JugadorDmgMultiplier = 1;
let MaquinaDmgMultiplier = 1;
let ToggleAtaque = false;
let JugadorHeal = true;
let MaquinaHeal = true;
let JugadorMhp = null;
let MaquinaMhp = null;
let Turno = true;
const btnSound = new Audio("../audio/btnSound.mp3");
btnSound.playbackRate = 1.5;
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
  const Atacante = Tipos.indexOf(tipoAtaque);
  const Defensor = Tipos.indexOf(tipoDefensor);
  return Efectividad[Atacante][Defensor];
}

document.addEventListener("DOMContentLoaded", function () {
  Jugador = JSON.parse(getCookie("PokemonJugador"));
  Maquina = JSON.parse(getCookie("PokemonMaquina"));
  JugadorMhp = JSON.parse(getCookie("JugadorMhp"));
  MaquinaMhp = JSON.parse(getCookie("MaquinaMhp"));
  MostrarCombate();
  actualizarBarraVidaJugador(Jugador.hp, JugadorMhp);
  actualizarBarraVidaMaquina(Maquina.hp, MaquinaMhp);
});

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let c = cookie.trim();
    if (c.startsWith(`${name}=`)) return c.substring(name.length + 1);
  }
  return null;
}

function setJugadorCookie() {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const pokemonData = JSON.stringify(Jugador);
  document.cookie = `PokemonJugador=${pokemonData}; ${expires}; path=/`;
}

function setMaquinaCookie() {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const pokemonData = JSON.stringify(Maquina);
  document.cookie = `PokemonMaquina=${pokemonData}; ${expires}; path=/`;
}

function MostrarCombate() {
  const imgPoke = Jugador.isShiny
    ? Jugador.img.replace("normal-sprite", "shiny-sprite")
    : Jugador.img;
  const imgPokeMaquina = Maquina.isShiny
    ? Maquina.img.replace("normal-sprite", "shiny-sprite")
    : Maquina.img;
  const PokemonJugador = document.createElement("div");
  if (Jugador.isShiny) {
    PokemonJugador.classList.add("pokemonShinyJugador");
    PokemonJugador.innerHTML = `<img src=${imgPoke} class="imagenPokemon"/><br>
  <p class="Nombre, Shiny">${Jugador.name} ★</p>
  <div class="barraVidaJugador"><p class="VidaJugador"><br></p></div>`;
  } else {
    PokemonJugador.classList.add("pokemonJugador");
    PokemonJugador.innerHTML = `<img src=${imgPoke} class="imagenPokemon"/><br>
  <p class="Nombre">${Jugador.name}</p>
  <div class="barraVidaJugador"><p class="VidaJugador"><br></p></div>`;
  }
  PantallaCombate.appendChild(PokemonJugador);
  const PokemonMaquina = document.createElement("div");
  if (Maquina.isShiny) {
    PokemonMaquina.classList.add("pokemonShiny");
    PokemonMaquina.innerHTML = `<img src=${imgPokeMaquina} class="imagenPokemon"/><br>
  <p class="Nombre, Shiny">${Maquina.name} ★</p>
  <div class="barraVidaMaquina"><p class="VidaMaquina"><br></p></div>`;
  } else {
    PokemonMaquina.classList.add("pokemon");
    PokemonMaquina.innerHTML = `<img src=${imgPokeMaquina} class="imagenPokemon"/><br>
  <p class="Nombre">${Maquina.name}</p>
  <div class="barraVidaMaquina"><p class="VidaMaquina"><br></p></div>`;
  }
  PantallaCombate.appendChild(PokemonMaquina);

  PantallaBotones.classList.add("boton");
  const BotonLucha = document.createElement("button");
  BotonLucha.classList.add("botonAtacar");
  BotonLucha.innerHTML = `<p>Atacar</p>`;
  BotonLucha.addEventListener("click", function () {
    btnSound.pause();
    btnSound.currentTime = 0;
    btnSound.play();
    ToggleVisibility();
  });
  PantallaBotones.appendChild(BotonLucha);
  const Boton = document.createElement("button");
  Boton.id = "botonHeal";
  Boton.classList.add("botonHeal");
  Boton.innerHTML = `<p>Curarse</p>`;
  Boton.addEventListener("click", function () {
    btnSound.pause();
    btnSound.currentTime = 0;
    btnSound.play();
    BotonHeal(Jugador);
  });
  PantallaBotones.appendChild(Boton);

  const PantallaMovimientos = document.getElementById("movimientos");
  for (let i = 0; i < Jugador.moves.length; i++) {
    const Boton = document.createElement("button");
    Boton.classList.add("botonMovimientos");
    Boton.classList.add(Jugador.moves[i].type);
    Boton.innerHTML = `<p>${Jugador.moves[i].move}</p><br>
    <p>${Jugador.moves[i].type}</p>`;
    Boton.addEventListener("click", function () {
      btnSound.pause();
      btnSound.currentTime = 0;
      btnSound.play();
      Attack(
        Jugador.moves[i].move,
        Jugador.moves[i].move_dmg,
        Jugador.moves[i].type,
        Maquina.types
      );
    });
    PantallaMovimientos.appendChild(Boton);
  }
  const BotonSalir = document.createElement("button");
  BotonSalir.classList.add("botonSalir");
  BotonSalir.innerHTML = `<p>Volver</p>`;
  BotonSalir.addEventListener("click", function () {
    btnSound.pause();
    btnSound.currentTime = 0;
    btnSound.play();
    ToggleVisibility();
  });
  PantallaMovimientos.appendChild(BotonSalir);
  PantallaMovimientos.style.visibility = "hidden";
  PantallaMovimientos.style.display = "none";
}

function Attack(Move, MoveDmg, MoveType, OpnenentTypes) {
  const log = document.createElement("p");
  if (Turno) {
    if (OpnenentTypes.length > 1) {
      let MaquinaTipo1 = String(OpnenentTypes[0]);
      let MaquinaTipo2 = String(OpnenentTypes[1]);
      JugadorDmgMultiplier *= getEfectividad(MoveType, MaquinaTipo1);
      JugadorDmgMultiplier *= getEfectividad(MoveType, MaquinaTipo2);
    } else {
      let MaquinaTipo1 = String(OpnenentTypes);
      JugadorDmgMultiplier *= getEfectividad(MoveType, MaquinaTipo1);
    }
    let ran = (Math.floor(Math.random() * 17) + 84) / 100;
    if (ran == 0.84) {
      log.innerHTML = `${Jugador.name} ha usado ${Move}, pero ha fallado`;
    } else {
      let dmg =
        (Jugador.attack / Maquina.defense) *
        MoveDmg *
        ran *
        JugadorDmgMultiplier;
      let ent = Math.trunc(dmg);
      Maquina.hp -= ent;
      actualizarBarraVidaMaquina(Maquina.hp, MaquinaMhp);
      log.innerHTML = `${Jugador.name} ha usado ${Move} haciendo ${ent} puntos de daño`;
      PantallaLog.appendChild(log);
    }
    Turno = false;
    setJugadorCookie();
    setMaquinaCookie();
    JugadorDmgMultiplier = 1;
    ToggleVisibility();
    DesactivarVisibility();
    if (Maquina.hp <= 0) {
      setTimeout(Ganar, 2000);
      log.innerHTML = `${Maquina.name} se ha debilitado`;
      setTimeout(
        (log.innerHTML = `${Jugador.name} ha ganado el combate`),
        1000
      );
    } else {
      setTimeout(TurnoMaquina, 2000);
    }
  } else {
    if (OpnenentTypes.length > 1) {
      let JugadorTipo1 = String(OpnenentTypes[0]);
      let JugadorTipo2 = String(OpnenentTypes[1]);
      MaquinaDmgMultiplier *= getEfectividad(MoveType, JugadorTipo1);
      MaquinaDmgMultiplier *= getEfectividad(MoveType, JugadorTipo2);
    } else {
      let JugadorTipo1 = String(OpnenentTypes);
      JugadorDmgMultiplier *= getEfectividad(MoveType, JugadorTipo1);
    }
    let ran = (Math.floor(Math.random() * 17) + 84) / 100;
    if (ran == 0.84) {
      log.innerHTML = `${Maquina.name} ha usado ${Move}, pero ha fallado`;
      PantallaLog.appendChild(log);
    } else {
      let dmg =
        (Maquina.attack / Jugador.defense) *
        MoveDmg *
        ran *
        MaquinaDmgMultiplier;
      let ent = Math.trunc(dmg);
      Jugador.hp -= ent;
      if (Jugador.hp <= 0) {
        Jugador.hp = 0;
      }
      actualizarBarraVidaJugador(Jugador.hp, JugadorMhp);
      log.innerHTML = `${Maquina.name} ha usado ${Move} haciendo ${ent} puntos de daño`;
      PantallaLog.appendChild(log);
    }

    setJugadorCookie();
    setMaquinaCookie();
    MaquinaDmgMultiplier = 1;
    Turno = true;
    if (Jugador.hp <= 0) {
      Perder();
    } else {
      setTimeout(ActivarVisibility, 2000);
    }
  }
}

function BotonHeal(pokemon) {
  if (pokemon == Jugador) {
    if (JugadorHeal) {
      let vida = Jugador.hp;
      vida += JugadorMhp / 2;
      vida > JugadorMhp ? (Jugador.hp = JugadorMhp) : (Jugador.hp = vida);
      const log = document.createElement("p");
      log.innerHTML = `${Jugador.name} se ha curado`;
      PantallaLog.appendChild(log);
      actualizarBarraVidaJugador(Jugador.hp, JugadorMhp);
      Turno = false;
      const btnHeal = document.getElementById("botonHeal");
      btnHeal.disabled = true;
      JugadorHeal = false;
    }
    DesactivarVisibility();
    setJugadorCookie();
    setMaquinaCookie();
    setTimeout(TurnoMaquina, 2000);
  } else {
    if (MaquinaHeal) {
      let vida = Maquina.hp;
      vida += MaquinaMhp / 2;
      vida > MaquinaMhp ? (Maquina.hp = MaquinaMhp) : (Maquina.hp = vida);
      const log = document.createElement("p");
      log.innerHTML = `${Maquina.name} se ha curado`;
      PantallaLog.appendChild(log);
      actualizarBarraVidaMaquina(Maquina.hp, MaquinaMhp);
      MaquinaHeal = false;
      Turno = true;
    } else {
    }
    setJugadorCookie();
    setMaquinaCookie();
  }
}
function actualizarBarraVidaJugador(vida, maxVida) {
  const barra = document.querySelector(".barraVidaJugador");
  const vidaJugador = document.querySelector(".VidaJugador");
  if ((vida / maxVida) * 100 < 0) {
    vidaJugador.style.marginLeft = "0%";
  } else {
    vidaJugador.style.marginLeft = (vida / maxVida) * 100 + "%";
  }
  if ((vida / maxVida) * 100 > 70) {
    barra.style.backgroundColor = "green";
  } else if ((vida / maxVida) * 100 > 30) {
    barra.style.backgroundColor = "yellow";
  } else {
    barra.style.backgroundColor = "red";
  }
}
function actualizarBarraVidaMaquina(vida, maxVida) {
  const barra = document.querySelector(".barraVidaMaquina");
  const vidaMaquina = document.querySelector(".VidaMaquina");
  if ((vida / maxVida) * 100 < 0) {
    vidaMaquina.style.marginLeft = "0%";
  } else {
    vidaMaquina.style.marginLeft = (vida / maxVida) * 100 + "%";
  }

  if ((vida / maxVida) * 100 > 70) {
    barra.style.backgroundColor = "green";
  } else if ((vida / maxVida) * 100 > 30) {
    barra.style.backgroundColor = "yellow";
  } else {
    barra.style.backgroundColor = "red";
  }
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
function ActivarVisibility() {
  PantallaBotones.style.visibility = "visible";
  PantallaBotones.style.display = "";
}
function DesactivarVisibility() {
  PantallaBotones.style.visibility = "hidden";
  PantallaBotones.style.display = "none";
}

function Ganar() {
  if (Maquina.isShiny) {
    const pokemon = document.querySelector(".pokemonShiny");
    pokemon.classList.add("temblor");
    setTimeout(() => {
      pokemon.classList.add("fadeOut");
      setTimeout(() => {
        pokemon.style.visibility = "hidden";
        log.innerHTML = "Has Ganado el combate";
        log.style.fontWeight  = "bold";
        log.style.color = "green";
        log.style.fontSize = "4em";
      }, 1000);
    }, 1500);
  } else {
    const pokemon = document.querySelector(".pokemon");
    pokemon.classList.add("temblor");
    setTimeout(() => {
      pokemon.classList.add("fadeOut");
      setTimeout(() => {
        pokemon.style.visibility = "hidden";
        log.innerHTML = "Has ganado el combate";
        log.style.fontWeight  = "bold";
        log.style.color = "green";
        log.style.fontSize = "4em";
      }, 1000);
    }, 1500);
  }
}

function Perder() {
  if (Jugador.isShiny) {
    const pokemon = document.querySelector(".pokemonShinyJugador");
    pokemon.classList.add("temblor");
    setTimeout(() => {
      pokemon.classList.add("fadeOut");
      setTimeout(() => {
        pokemon.style.visibility = "hidden";
        log.innerHTML = "Has perdido el combate";
        log.style.fontWeight  = "bold";
        log.style.color = "red";
        log.style.fontSize = "4em";
      }, 1000);
    }, 1250);
  } else {
    const pokemon = document.querySelector(".pokemonJugador");
    pokemon.classList.add("temblor");
    setTimeout(() => {
      pokemon.classList.add("fadeOut");
      setTimeout(() => {
        pokemon.style.visibility = "hidden";
        log.innerHTML = "Has perdido el combate";
        log.style.fontWeight  = "bold";
        log.style.color = "red";
        log.style.fontSize = "4em";
      }, 1000);
    }, 1250);
  }
}

function TurnoMaquina() {
  if (MaquinaHeal && Maquina.hp.chp < MaquinaMhp / 2) {
    turnoOponente = Math.floor(Math.random() * 2) + 1;
  } else {
    turnoOponente = 1;
  }
  switch (turnoOponente) {
    case 1: {
      let movimiento = Math.floor(Math.random() * Maquina.moves.length);
      Attack(
        Maquina.moves[movimiento].move,
        Maquina.moves[movimiento].move_dmg,
        Maquina.moves[movimiento].type,
        Maquina.types
      );
      break;
    }
    case 2: {
      BotonHeal(Maquina);
      setTimeout(ActivarVisibility, 2000);
      break;
    }
  }
}
