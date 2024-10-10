let Pokemon = require("./Pokemon.js");
let Tipos = require("./Type.js");
let Move = require("./Move.js");
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

let Pokemones = [
  {
    name: "Sceptile",
    type: Tipos.GRASS,
    chp: 140,
    mhp: 140,
    attackStat: 5,
    deffense: 3,
    moves: [Moves[0], Moves[1]],
  },
  {
    name: "Charmarder",
    type: Tipos.FIRE,
    chp: 130,
    mhp: 130,
    attackStat: 6,
    deffense: 2,
    moves: [Moves[0], Moves[3]],
  },
  {
    name: "Squirtle",
    type: Tipos.WATER,
    chp: 120,
    mhp: 120,
    attackStat: 5,
    deffense: 5,
    moves: [Moves[0], Moves[1]],
  },
  {
    name: "Geodude",
    type: Tipos.ROCK,
    chp: 200,
    mhp: 200,
    attackStat: 2,
    deffense: 7,
    moves: [Moves[0], Moves[4]],
  },
  {
    name: "Mankey",
    type: Tipos.FIGHTING,
    chp: 140,
    mhp: 140,
    attackStat: 4,
    deffense: 4,
    moves: [Moves[0], Moves[5]],
  },
  {
    name: "Meowth",
    type: Tipos.NORMAL,
    chp: 150,
    mhp: 150,
    attackStat: 5,
    deffense: 3,
    moves: [Moves[0], Moves[6]],
  },
  {
    name: "Lapras",
    type: Tipos.ICE,
    chp: 160,
    mhp: 160,
    attackStat: 4,
    deffense: 5,
    moves: [Moves[0], Moves[8]],
  },
  {
    name: "Pawmot",
    type: Tipos.ELECTRIC,
    chp: 120,
    mhp: 120,
    attackStat: 6,
    deffense: 2,
    moves: [Moves[0], Moves[2]],
  },
  {
    name: "Pidgey",
    type: Tipos.FLYING,
    chp: 110,
    mhp: 110,
    attackStat: 7,
    deffense: 4,
    moves: [Moves[0], Moves[9]],
  },
];

for (let i = 0; i < Pokemones.length; i++) {
  console.log(`Nombre: ${Pokemones[i].name}`);
  console.log(`Tipo: ${Pokemones[i].type}`);
  console.log(`Vida actual: ${Pokemones[i].chp}`);
  console.log(`Vida máxima: ${Pokemones[i].mhp}`);
  console.log(`Ataque: ${Pokemones[i].attackStat}`);
  console.log(`Defensa: ${Pokemones[i].deffense}`);
  console.log(Pokemones[i].moves);
  console.log("\n");
}

let PJugador = Math.floor(Math.random() * Pokemones.length);
let POponente = Math.floor(Math.random() * Pokemones.length);
