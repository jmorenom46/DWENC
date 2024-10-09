let Pokemon = require("./Pokemon.js");
let Tipos = require("./Type.js");
let Move = require("./Move.js");
const scanner = require("readline-sync");

const Moves = [
  (Move = { move: "Placaje", dmg: 20 }),
  (Move = { move: "Pistola agua", dmg: 60 }),
  (Move = { move: "Placaje Electrico", dmg: 40 }),
  (Move = { move: "Anillo ígneo", dmg: 60 }),
  (Move = { move: "Alud", dmg: 30 }),
  (Move = { move: "A bocajarro", dmg: 50 }),
  (Move = { move: "Ataque rápido", dmg: 20 }),
  (Move = { move: "Ácido málico", dmg: 40 }),
  (Move = { move: "Avalancha", dmg: 35 }),
  (Move = { move: "Ataque aéreo", dmg: 60 }),
];

const Moves2 = [
  new Move("Placaje", 20),
  new Move("Pistola agua", 60),
  new Move("Placaje Electrico", 40),
  new Move("Anillo ígneo", 60),
  new Move("Alud", 30),
  new Move("A bocajarro", 50),
  new Move("Ataque rápido", 20),
  new Move("Ácido málico", 40),
  new Move("Avalancha", 35),
  new Move("Ataque aéreo", 60),
];

let Pokemones = [
  (Pokemon = {
    name: "Sceptile",
    type: Tipos.GRASS,
    chp: 140,
    mhp: 140,
    attackStat: 5,
    deffense: 3,
    moves: [Moves2.Placaje, Moves2.PistolaAgua],
  }),
  (Pokemon = {
    name: "Charmarder",
    type: Tipos.FIRE,
    chp: 130,
    mhp: 130,
    attackStat: 6,
    deffense: 2,
    moves: Moves2.Placaje,
  }),
  (Pokemon = {
    name: "Squirtle",
    type: Tipos.WATER,
    chp: 120,
    mhp: 120,
    attackStat: 5,
    deffense: 5,
    moves: Moves2.Placaje,
  }),
  (Pokemon = {
    name: "Geodude",
    type: Tipos.ROCK,
    chp: 200,
    mhp: 200,
    attackStat: 2,
    deffense: 7,
    moves: Moves2.Placaje,
  }),
  (Pokemon = {
    name: "Mankey",
    type: Tipos.FIGHTING,
    chp: 140,
    mhp: 140,
    attackStat: 4,
    deffense: 4,
    moves: Moves2.Placaje,
  }),
  (Pokemon = {
    name: "Meowth",
    type: Tipos.NORMAL,
    chp: 150,
    mhp: 150,
    attackStat: 5,
    deffense: 3,
    moves: Moves2.Placaje,
  }),
  (Pokemon = {
    name: "Lapras",
    type: Tipos.ICE,
    chp: 160,
    mhp: 160,
    attackStat: 4,
    deffense: 5,
    moves: Moves2.Placaje,
  }),
  (Pokemon = {
    name: "Pawmot",
    type: Tipos.ELECTRIC,
    chp: 120,
    mhp: 120,
    attackStat: 6,
    deffense: 2,
    moves: Moves2.Placaje,
  }),
  (Pokemon = {
    name: "Pidgey",
    type: Tipos.FLYING,
    chp: 110,
    mhp: 110,
    attackStat: 7,
    deffense: 4,
    moves: Moves2.Placaje,
  }),
];


