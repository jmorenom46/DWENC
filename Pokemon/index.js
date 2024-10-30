let Pokemon = require("./Pokemon");
let Tipos = require("./Type");
let Move = require("./Move");
const scanner = require("readline-sync");

const Moves = [
  {
    move: "Placaje",
    dmg: 20,
  },
  {
    move: "Pistola agua",
    dmg: 60,
  },
  {
    move: "Placaje Electrico",
    dmg: 40,
  },
  {
    move: "Anillo ígneo",
    dmg: 60,
  },
  {
    move: "Alud",
    dmg: 30,
  },
  {
    move: "A bocajarro",
    dmg: 50,
  },
  {
    move: "Ataque rápido",
    dmg: 20,
  },
  {
    move: "Ácido málico",
    dmg: 40,
  },
  {
    move: "Avalancha",
    dmg: 35,
  },
  {
    move: "Ataque aéreo",
    dmg: 60,
  },
];

let Pokemons = [
  new Pokemon("Sceptile", Tipos.GRASS, 140, 140, 5, 3, [Moves[0], Moves[7]]),
  new Pokemon("Charmarder", Tipos.FIRE, 130, 130, 6, 2, [Moves[0], Moves[3]]),
  new Pokemon("Squirtle", Tipos.WATER, 120, 120, 5, 5, [Moves[0], Moves[1]]),
  new Pokemon("Geodude", Tipos.ROCK, 200, 200, 2, 7, [Moves[0], Moves[4]]),
  new Pokemon("Mankey", Tipos.FIGHTING, 140, 140, 4, 4, [Moves[0], Moves[5]]),
  new Pokemon("Meowth", Tipos.NORMAL, 150, 150, 5, 3, [Moves[0], Moves[6]]),
  new Pokemon("Lapras", Tipos.ICE, 160, 160, 4, 5, [Moves[0], Moves[8]]),
  new Pokemon("Pawmot", Tipos.ELECTRIC, 120, 120, 6, 2, [Moves[0], Moves[2]]),
  new Pokemon("Pidgey", Tipos.FLYING, 110, 110, 7, 4, [Moves[0], Moves[9]]),
];

let vidaJugador = true;
let vidaOponente = true;
let healJ = true;
let healO = true;

let PJugador = Pokemons[Math.floor(Math.random() * Pokemons.length)];
let POponente = Pokemons[Math.floor(Math.random() * Pokemons.length)];
while (PJugador == POponente) {
  POponente = Pokemons[Math.floor(Math.random() * Pokemons.length)];
}

while (vidaJugador && vidaOponente) {
  if (PJugador.chp > 0) {
    console.log(`Pokemon Jugador: ${PJugador.name} | HP: ${PJugador.chp}`);
    console.log(`====================================`);
    console.log(`Pokemon Oponente: ${POponente.name} | HP: ${POponente.chp}`);
    console.log(`------------------------------------`);
    console.log(`1.- Ataque | 2.- Curacion`);
    let opt = Number(scanner.question("Elige una opcion: "));

    switch (opt) {
      case 1: {
        console.log(
          `1.- ${PJugador.moves[0].move} | 2.- ${PJugador.moves[1].move}`
        );
        let movimiento = Number(scanner.question("Elige un movimiento: \n"));
        PJugador.attack(movimiento, POponente);
        console.log("\n");
        break;
      }
      case 2: {
        if (healJ) {
          PJugador.heal();

          healJ = false;
          console.log(`${PJugador.name} ha sido curado.\n`);
        } else {
          console.log(`${PJugador.name} ya no puede curarse.`);
        }
        break;
      }
    }
    if (POponente.chp > 0) {
      if (healO && POponente.chp < POponente.mhp / 2) {
        turnoOponente = Math.floor(Math.random() * 2) + 1;
        console.log(healO);
      } else {
        turnoOponente = 1;
      }

      switch (turnoOponente) {
        case 1: {
          let movimiento = Math.floor(Math.random() * 2) + 1;
          POponente.attack(movimiento, PJugador);
          console.log("\n");
          break;
        }
        case 2: {
          if (healO) {
            POponente.heal();
            healO = false;
            console.log(`${POponente.name} ha sido curado.\n`);
          } else {
            console.log(`${POponente.name} ya no puede curarse.`);
          }
          break;
        }
      }
    } else {
      vidaOponente = false;
      console.log(`${POponente.name} ha sido derrotado. Juego terminado`);
    }
  } else {
    vidaJugador = false;
    console.log(`${PJugador.name} ha sido derrotado. Juego terminado`);
  }
}
