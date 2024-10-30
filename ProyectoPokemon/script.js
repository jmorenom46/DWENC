/*let Pokemon = require("./Pokemon");
let Move = require("./Move");*/

let moves = [];

const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    img: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 2,
    name: "Ivysaur",
    img: "https://projectpokemon.org/images/normal-sprite/ivysaur.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 3,
    name: "Venusaur",
    img: "https://projectpokemon.org/images/normal-sprite/venusaur.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 4,
    name: "Charmander",
    img: "https://projectpokemon.org/images/normal-sprite/charmander.gif",
    types: ["Fire"],
  },
  {
    id: 5,
    name: "Charmeleon",
    img: "https://projectpokemon.org/images/normal-sprite/charmeleon.gif",
    types: ["Fire"],
  },
  {
    id: 6,
    name: "Charizard",
    img: "https://projectpokemon.org/images/normal-sprite/charizard.gif",
    types: ["Fire", "Flying"],
  },
  {
    id: 7,
    name: "Squirtle",
    img: "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
    types: ["Water"],
  },
  {
    id: 8,
    name: "Wartortle",
    img: "https://projectpokemon.org/images/normal-sprite/wartortle.gif",
    types: ["Water"],
  },
  {
    id: 9,
    name: "Blastoise",
    img: "https://projectpokemon.org/images/normal-sprite/blastoise.gif",
    types: ["Water"],
  },
  {
    id: 10,
    name: "Caterpie",
    img: "https://projectpokemon.org/images/normal-sprite/caterpie.gif",
    types: ["Bug"],
  },
  {
    id: 11,
    name: "Metapod",
    img: "https://projectpokemon.org/images/normal-sprite/metapod.gif",
    types: ["Bug"],
  },
  {
    id: 12,
    name: "Butterfree",
    img: "https://projectpokemon.org/images/normal-sprite/butterfree.gif",
    types: ["Bug", "Flying"],
  },
  {
    id: 13,
    name: "Weedle",
    img: "https://projectpokemon.org/images/normal-sprite/weedle.gif",
    types: ["Bug", "Poison"],
  },
  {
    id: 14,
    name: "Kakuna",
    img: "https://projectpokemon.org/images/normal-sprite/kakuna.gif",
    types: ["Bug", "Poison"],
  },
  {
    id: 15,
    name: "Beedrill",
    img: "https://projectpokemon.org/images/normal-sprite/beedrill.gif",
    types: ["Bug", "Poison"],
  },
  {
    id: 16,
    name: "Pidgey",
    img: "https://projectpokemon.org/images/normal-sprite/pidgey.gif",
    types: ["Normal", "Flying"],
  },
  {
    id: 17,
    name: "Pidgeotto",
    img: "https://projectpokemon.org/images/normal-sprite/pidgeotto.gif",
    types: ["Normal", "Flying"],
  },
  {
    id: 18,
    name: "Pidgeot",
    img: "https://projectpokemon.org/images/normal-sprite/pidgeot.gif",
    types: ["Normal", "Flying"],
  },
  {
    id: 19,
    name: "Rattata",
    img: "https://projectpokemon.org/images/normal-sprite/rattata.gif",
    types: ["Normal"],
  },
  {
    id: 20,
    name: "Raticate",
    img: "https://projectpokemon.org/images/normal-sprite/raticate.gif",
    types: ["Normal"],
  },
  {
    id: 21,
    name: "Spearow",
    img: "https://projectpokemon.org/images/normal-sprite/spearow.gif",
    types: ["Normal", "Flying"],
  },
  {
    id: 22,
    name: "Fearow",
    img: "https://projectpokemon.org/images/normal-sprite/fearow.gif",
    types: ["Normal", "Flying"],
  },
  {
    id: 23,
    name: "Ekans",
    img: "https://projectpokemon.org/images/normal-sprite/ekans.gif",
    types: ["Poison"],
  },
  {
    id: 24,
    name: "Arbok",
    img: "https://projectpokemon.org/images/normal-sprite/arbok.gif",
    types: ["Poison"],
  },
  {
    id: 25,
    name: "Pikachu",
    img: "https://projectpokemon.org/images/normal-sprite/pikachu.gif",
    types: ["Electric"],
  },
  {
    id: 26,
    name: "Raichu",
    img: "https://projectpokemon.org/images/normal-sprite/raichu.gif",
    types: ["Electric"],
  },
  {
    id: 27,
    name: "Sandshrew",
    img: "https://projectpokemon.org/images/normal-sprite/sandshrew.gif",
    types: ["Ground"],
  },
  {
    id: 28,
    name: "Sandslash",
    img: "https://projectpokemon.org/images/normal-sprite/sandslash.gif",
    types: ["Ground"],
  },
  {
    id: 29,
    name: "Nidoran♀",
    img: "https://projectpokemon.org/images/normal-sprite/nidoran_f.gif",
    types: ["Poison"],
  },
  {
    id: 30,
    name: "Nidorina",
    img: "https://projectpokemon.org/images/normal-sprite/nidorina.gif",
    types: ["Poison"],
  },
  {
    id: 31,
    name: "Nidoqueen",
    img: "https://projectpokemon.org/images/normal-sprite/nidoqueen.gif",
    types: ["Poison", "Ground"],
  },
  {
    id: 32,
    name: "Nidoran♂",
    img: "https://projectpokemon.org/images/normal-sprite/nidoran_m.gif",
    types: ["Poison"],
  },
  {
    id: 33,
    name: "Nidorino",
    img: "https://projectpokemon.org/images/normal-sprite/nidorino.gif",
    types: ["Poison"],
  },
  {
    id: 34,
    name: "Nidoking",
    img: "https://projectpokemon.org/images/normal-sprite/nidoking.gif",
    types: ["Poison", "Ground"],
  },
  {
    id: 35,
    name: "Clefairy",
    img: "https://projectpokemon.org/images/normal-sprite/clefairy.gif",
    types: ["Fairy"],
  },
  {
    id: 36,
    name: "Clefable",
    img: "https://projectpokemon.org/images/normal-sprite/clefable.gif",
    types: ["Fairy"],
  },
  {
    id: 37,
    name: "Vulpix",
    img: "https://projectpokemon.org/images/normal-sprite/vulpix.gif",
    types: ["Fire"],
  },
  {
    id: 38,
    name: "Ninetales",
    img: "https://projectpokemon.org/images/normal-sprite/ninetales.gif",
    types: ["Fire"],
  },
  {
    id: 39,
    name: "Jigglypuff",
    img: "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif",
    types: ["Normal", "Fairy"],
  },
  {
    id: 40,
    name: "Wigglytuff",
    img: "https://projectpokemon.org/images/normal-sprite/wigglytuff.gif",
    types: ["Normal", "Fairy"],
  },
  {
    id: 41,
    name: "Zubat",
    img: "https://projectpokemon.org/images/normal-sprite/zubat.gif",
    types: ["Poison", "Flying"],
  },
  {
    id: 42,
    name: "Golbat",
    img: "https://projectpokemon.org/images/normal-sprite/golbat.gif",
    types: ["Poison", "Flying"],
  },
  {
    id: 43,
    name: "Oddish",
    img: "https://projectpokemon.org/images/normal-sprite/oddish.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 44,
    name: "Gloom",
    img: "https://projectpokemon.org/images/normal-sprite/gloom.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 45,
    name: "Vileplume",
    img: "https://projectpokemon.org/images/normal-sprite/vileplume.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 46,
    name: "Paras",
    img: "https://projectpokemon.org/images/normal-sprite/paras.gif",
    types: ["Bug", "Grass"],
  },
  {
    id: 47,
    name: "Parasect",
    img: "https://projectpokemon.org/images/normal-sprite/parasect.gif",
    types: ["Bug", "Grass"],
  },
  {
    id: 48,
    name: "Venonat",
    img: "https://projectpokemon.org/images/normal-sprite/venonat.gif",
    types: ["Bug", "Poison"],
  },
  {
    id: 49,
    name: "Venomoth",
    img: "https://projectpokemon.org/images/normal-sprite/venomoth.gif",
    types: ["Bug", "Poison"],
  },
  {
    id: 50,
    name: "Diglett",
    img: "https://projectpokemon.org/images/normal-sprite/diglett.gif",
    types: ["Ground"],
  },
  {
    id: 51,
    name: "Dugtrio",
    img: "https://projectpokemon.org/images/normal-sprite/dugtrio.gif",
    types: ["Ground"],
  },
  {
    id: 52,
    name: "Meowth",
    img: "https://projectpokemon.org/images/normal-sprite/meowth.gif",
    types: ["Normal"],
  },
  {
    id: 53,
    name: "Persian",
    img: "https://projectpokemon.org/images/normal-sprite/persian.gif",
    types: ["Normal"],
  },
  {
    id: 54,
    name: "Psyduck",
    img: "https://projectpokemon.org/images/normal-sprite/psyduck.gif",
    types: ["Water"],
  },
  {
    id: 55,
    name: "Golduck",
    img: "https://projectpokemon.org/images/normal-sprite/golduck.gif",
    types: ["Water"],
  },
  {
    id: 56,
    name: "Mankey",
    img: "https://projectpokemon.org/images/normal-sprite/mankey.gif",
    types: ["Fighting"],
  },
  {
    id: 57,
    name: "Primeape",
    img: "https://projectpokemon.org/images/normal-sprite/primeape.gif",
    types: ["Fighting"],
  },
  {
    id: 58,
    name: "Growlithe",
    img: "https://projectpokemon.org/images/normal-sprite/growlithe.gif",
    types: ["Fire"],
  },
  {
    id: 59,
    name: "Arcanine",
    img: "https://projectpokemon.org/images/normal-sprite/arcanine.gif",
    types: ["Fire"],
  },
  {
    id: 60,
    name: "Poliwag",
    img: "https://projectpokemon.org/images/normal-sprite/poliwag.gif",
    types: ["Water"],
  },
  {
    id: 61,
    name: "Poliwhirl",
    img: "https://projectpokemon.org/images/normal-sprite/poliwhirl.gif",
    types: ["Water"],
  },
  {
    id: 62,
    name: "Poliwrath",
    img: "https://projectpokemon.org/images/normal-sprite/poliwrath.gif",
    types: ["Water", "Fighting"],
  },
  {
    id: 63,
    name: "Abra",
    img: "https://projectpokemon.org/images/normal-sprite/abra.gif",
    types: ["Psychic"],
  },
  {
    id: 64,
    name: "Kadabra",
    img: "https://projectpokemon.org/images/normal-sprite/kadabra.gif",
    types: ["Psychic"],
  },
  {
    id: 65,
    name: "Alakazam",
    img: "https://projectpokemon.org/images/normal-sprite/alakazam.gif",
    types: ["Psychic"],
  },
  {
    id: 66,
    name: "Machop",
    img: "https://projectpokemon.org/images/normal-sprite/machop.gif",
    types: ["Fighting"],
  },
  {
    id: 67,
    name: "Machoke",
    img: "https://projectpokemon.org/images/normal-sprite/machoke.gif",
    types: ["Fighting"],
  },
  {
    id: 68,
    name: "Machamp",
    img: "https://projectpokemon.org/images/normal-sprite/machamp.gif",
    types: ["Fighting"],
  },
  {
    id: 69,
    name: "Bellsprout",
    img: "https://projectpokemon.org/images/normal-sprite/bellsprout.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 70,
    name: "Weepinbell",
    img: "https://projectpokemon.org/images/normal-sprite/weepinbell.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 71,
    name: "Victreebel",
    img: "https://projectpokemon.org/images/normal-sprite/victreebel.gif",
    types: ["Grass", "Poison"],
  },
  {
    id: 72,
    name: "Tentacool",
    img: "https://projectpokemon.org/images/normal-sprite/tentacool.gif",
    types: ["Water", "Poison"],
  },
  {
    id: 73,
    name: "Tentacruel",
    img: "https://projectpokemon.org/images/normal-sprite/tentacruel.gif",
    types: ["Water", "Poison"],
  },
  {
    id: 74,
    name: "Geodude",
    img: "https://projectpokemon.org/images/normal-sprite/geodude.gif",
    types: ["Rock", "Ground"],
  },
  {
    id: 75,
    name: "Graveler",
    img: "https://projectpokemon.org/images/normal-sprite/graveler.gif",
    types: ["Rock", "Ground"],
  },
  {
    id: 76,
    name: "Golem",
    img: "https://projectpokemon.org/images/normal-sprite/golem.gif",
    types: ["Rock", "Ground"],
  },
  {
    id: 77,
    name: "Ponyta",
    img: "https://projectpokemon.org/images/normal-sprite/ponyta.gif",
    types: ["Fire"],
  },
  {
    id: 78,
    name: "Rapidash",
    img: "https://projectpokemon.org/images/normal-sprite/rapidash.gif",
    types: ["Fire"],
  },
  {
    id: 79,
    name: "Slowpoke",
    img: "https://projectpokemon.org/images/normal-sprite/slowpoke.gif",
    types: ["Water", "Psychic"],
  },
  {
    id: 80,
    name: "Slowbro",
    img: "https://projectpokemon.org/images/normal-sprite/slowbro.gif",
    types: ["Water", "Psychic"],
  },
  {
    id: 81,
    name: "Magnemite",
    img: "https://projectpokemon.org/images/normal-sprite/magnemite.gif",
    types: ["Electric", "Steel"],
  },
  {
    id: 82,
    name: "Magneton",
    img: "https://projectpokemon.org/images/normal-sprite/magneton.gif",
    types: ["Electric", "Steel"],
  },
  {
    id: 83,
    name: "Farfetch’d",
    img: "https://projectpokemon.org/images/normal-sprite/farfetchd.gif",
    types: ["Normal", "Flying"],
  },
  {
    id: 84,
    name: "Doduo",
    img: "https://projectpokemon.org/images/normal-sprite/doduo.gif",
    types: ["Normal", "Flying"],
  },
  {
    id: 85,
    name: "Dodrio",
    img: "https://projectpokemon.org/images/normal-sprite/dodrio.gif",
    types: ["Normal", "Flying"],
  },
  {
    id: 86,
    name: "Seel",
    img: "https://projectpokemon.org/images/normal-sprite/seel.gif",
    types: ["Water"],
  },
  {
    id: 87,
    name: "Dewgong",
    img: "https://projectpokemon.org/images/normal-sprite/dewgong.gif",
    types: ["Water", "Ice"],
  },
  {
    id: 88,
    name: "Grimer",
    img: "https://projectpokemon.org/images/normal-sprite/grimer.gif",
    types: ["Poison"],
  },
  {
    id: 89,
    name: "Muk",
    img: "https://projectpokemon.org/images/normal-sprite/muk.gif",
    types: ["Poison"],
  },
  {
    id: 90,
    name: "Shellder",
    img: "https://projectpokemon.org/images/normal-sprite/shellder.gif",
    types: ["Water"],
  },
  {
    id: 91,
    name: "Cloyster",
    img: "https://projectpokemon.org/images/normal-sprite/cloyster.gif",
    types: ["Water", "Ice"],
  },
  {
    id: 92,
    name: "Gastly",
    img: "https://projectpokemon.org/images/normal-sprite/gastly.gif",
    types: ["Ghost", "Poison"],
  },
  {
    id: 93,
    name: "Haunter",
    img: "https://projectpokemon.org/images/normal-sprite/haunter.gif",
    types: ["Ghost", "Poison"],
  },
  {
    id: 94,
    name: "Gengar",
    img: "https://projectpokemon.org/images/normal-sprite/gengar.gif",
    types: ["Ghost", "Poison"],
  },
  {
    id: 95,
    name: "Onix",
    img: "https://projectpokemon.org/images/normal-sprite/onix.gif",
    types: ["Rock", "Ground"],
  },
  {
    id: 96,
    name: "Drowzee",
    img: "https://projectpokemon.org/images/normal-sprite/drowzee.gif",
    types: ["Psychic"],
  },
  {
    id: 97,
    name: "Hypno",
    img: "https://projectpokemon.org/images/normal-sprite/hypno.gif",
    types: ["Psychic"],
  },
  {
    id: 98,
    name: "Krabby",
    img: "https://projectpokemon.org/images/normal-sprite/krabby.gif",
    types: ["Water"],
  },
  {
    id: 99,
    name: "Kingler",
    img: "https://projectpokemon.org/images/normal-sprite/kingler.gif",
    types: ["Water"],
  },
  {
    id: 100,
    name: "Voltorb",
    img: "https://projectpokemon.org/images/normal-sprite/voltorb.gif",
    types: ["Electric"],
  },
  {
    id: 101,
    name: "Electrode",
    img: "https://projectpokemon.org/images/normal-sprite/electrode.gif",
    types: ["Electric"],
  },
  {
    id: 102,
    name: "Exeggcute",
    img: "https://projectpokemon.org/images/normal-sprite/exeggcute.gif",
    types: ["Grass", "Psychic"],
  },
  {
    id: 103,
    name: "Exeggutor",
    img: "https://projectpokemon.org/images/normal-sprite/exeggutor.gif",
    types: ["Grass", "Psychic"],
  },
  {
    id: 104,
    name: "Cubone",
    img: "https://projectpokemon.org/images/normal-sprite/cubone.gif",
    types: ["Ground"],
  },
  {
    id: 105,
    name: "Marowak",
    img: "https://projectpokemon.org/images/normal-sprite/marowak.gif",
    types: ["Ground"],
  },
  {
    id: 106,
    name: "Hitmonlee",
    img: "https://projectpokemon.org/images/normal-sprite/hitmonlee.gif",
    types: ["Fighting"],
  },
  {
    id: 107,
    name: "Hitmonchan",
    img: "https://projectpokemon.org/images/normal-sprite/hitmonchan.gif",
    types: ["Fighting"],
  },
  {
    id: 108,
    name: "Lickitung",
    img: "https://projectpokemon.org/images/normal-sprite/lickitung.gif",
    types: ["Normal"],
  },
  {
    id: 109,
    name: "Koffing",
    img: "https://projectpokemon.org/images/normal-sprite/koffing.gif",
    types: ["Poison"],
  },
  {
    id: 110,
    name: "Weezing",
    img: "https://projectpokemon.org/images/normal-sprite/weezing.gif",
    types: ["Poison"],
  },
  {
    id: 111,
    name: "Rhyhorn",
    img: "https://projectpokemon.org/images/normal-sprite/rhyhorn.gif",
    types: ["Ground", "Rock"],
  },
  {
    id: 112,
    name: "Rhydon",
    img: "https://projectpokemon.org/images/normal-sprite/rhydon.gif",
    types: ["Ground", "Rock"],
  },
  {
    id: 113,
    name: "Chansey",
    img: "https://projectpokemon.org/images/normal-sprite/chansey.gif",
    types: ["Normal"],
  },
  {
    id: 114,
    name: "Tangela",
    img: "https://projectpokemon.org/images/normal-sprite/tangela.gif",
    types: ["Grass"],
  },
  {
    id: 115,
    name: "Kangaskhan",
    img: "https://projectpokemon.org/images/normal-sprite/kangaskhan.gif",
    types: ["Normal"],
  },
  {
    id: 116,
    name: "Horsea",
    img: "https://projectpokemon.org/images/normal-sprite/horsea.gif",
    types: ["Water"],
  },
  {
    id: 117,
    name: "Seadra",
    img: "https://projectpokemon.org/images/normal-sprite/seadra.gif",
    types: ["Water"],
  },
  {
    id: 118,
    name: "Goldeen",
    img: "https://projectpokemon.org/images/normal-sprite/goldeen.gif",
    types: ["Water"],
  },
  {
    id: 119,
    name: "Seaking",
    img: "https://projectpokemon.org/images/normal-sprite/seaking.gif",
    types: ["Water"],
  },
  {
    id: 120,
    name: "Staryu",
    img: "https://projectpokemon.org/images/normal-sprite/staryu.gif",
    types: ["Water"],
  },
  {
    id: 121,
    name: "Starmie",
    img: "https://projectpokemon.org/images/normal-sprite/starmie.gif",
    types: ["Water", "Psychic"],
  },
  {
    id: 122,
    name: "Mr. Mime",
    img: "https://projectpokemon.org/images/normal-sprite/mr.mime.gif",
    types: ["Psychic", "Fairy"],
  },
  {
    id: 123,
    name: "Scyther",
    img: "https://projectpokemon.org/images/normal-sprite/scyther.gif",
    types: ["Bug", "Flying"],
  },
  {
    id: 124,
    name: "Jynx",
    img: "https://projectpokemon.org/images/normal-sprite/jynx.gif",
    types: ["Ice", "Psychic"],
  },
  {
    id: 125,
    name: "Electabuzz",
    img: "https://projectpokemon.org/images/normal-sprite/electabuzz.gif",
    types: ["Electric"],
  },
  {
    id: 126,
    name: "Magmar",
    img: "https://projectpokemon.org/images/normal-sprite/magmar.gif",
    types: ["Fire"],
  },
  {
    id: 127,
    name: "Pinsir",
    img: "https://projectpokemon.org/images/normal-sprite/pinsir.gif",
    types: ["Bug"],
  },
  {
    id: 128,
    name: "Tauros",
    img: "https://projectpokemon.org/images/normal-sprite/tauros.gif",
    types: ["Normal"],
  },
  {
    id: 129,
    name: "Magikarp",
    img: "https://projectpokemon.org/images/normal-sprite/magikarp.gif",
    types: ["Water"],
  },
  {
    id: 130,
    name: "Gyarados",
    img: "https://projectpokemon.org/images/normal-sprite/gyarados.gif",
    types: ["Water", "Flying"],
  },
  {
    id: 131,
    name: "Lapras",
    img: "https://projectpokemon.org/images/normal-sprite/lapras.gif",
    types: ["Water", "Ice"],
  },
  {
    id: 132,
    name: "Ditto",
    img: "https://projectpokemon.org/images/normal-sprite/ditto.gif",
    types: ["Normal"],
  },
  {
    id: 133,
    name: "Eevee",
    img: "https://projectpokemon.org/images/normal-sprite/eevee.gif",
    types: ["Normal"],
  },
  {
    id: 134,
    name: "Vaporeon",
    img: "https://projectpokemon.org/images/normal-sprite/vaporeon.gif",
    types: ["Water"],
  },
  {
    id: 135,
    name: "Jolteon",
    img: "https://projectpokemon.org/images/normal-sprite/jolteon.gif",
    types: ["Electric"],
  },
  {
    id: 136,
    name: "Flareon",
    img: "https://projectpokemon.org/images/normal-sprite/flareon.gif",
    types: ["Fire"],
  },
  {
    id: 137,
    name: "Porygon",
    img: "https://projectpokemon.org/images/normal-sprite/porygon.gif",
    types: ["Normal"],
  },
  {
    id: 138,
    name: "Omanyte",
    img: "https://projectpokemon.org/images/normal-sprite/omanyte.gif",
    types: ["Rock", "Water"],
  },
  {
    id: 139,
    name: "Omastar",
    img: "https://projectpokemon.org/images/normal-sprite/omastar.gif",
    types: ["Rock", "Water"],
  },
  {
    id: 140,
    name: "Kabuto",
    img: "https://projectpokemon.org/images/normal-sprite/kabuto.gif",
    types: ["Rock", "Water"],
  },
  {
    id: 141,
    name: "Kabutops",
    img: "https://projectpokemon.org/images/normal-sprite/kabutops.gif",
    types: ["Rock", "Water"],
  },
  {
    id: 142,
    name: "Aerodactyl",
    img: "https://projectpokemon.org/images/normal-sprite/aerodactyl.gif",
    types: ["Rock", "Flying"],
  },
  {
    id: 143,
    name: "Snorlax",
    img: "https://projectpokemon.org/images/normal-sprite/snorlax.gif",
    types: ["Normal"],
  },
  {
    id: 144,
    name: "Articuno",
    img: "https://projectpokemon.org/images/normal-sprite/articuno.gif",
    types: ["Ice", "Flying"],
  },
  {
    id: 145,
    name: "Zapdos",
    img: "https://projectpokemon.org/images/normal-sprite/zapdos.gif",
    types: ["Electric", "Flying"],
  },
  {
    id: 146,
    name: "Moltres",
    img: "https://projectpokemon.org/images/normal-sprite/moltres.gif",
    types: ["Fire", "Flying"],
  },
  {
    id: 147,
    name: "Dratini",
    img: "https://projectpokemon.org/images/normal-sprite/dratini.gif",
    types: ["Dragon"],
  },
  {
    id: 148,
    name: "Dragonair",
    img: "https://projectpokemon.org/images/normal-sprite/dragonair.gif",
    types: ["Dragon"],
  },
  {
    id: 149,
    name: "Dragonite",
    img: "https://projectpokemon.org/images/normal-sprite/dragonite.gif",
    types: ["Dragon", "Flying"],
  },
  {
    id: 150,
    name: "Mewtwo",
    img: "https://projectpokemon.org/images/normal-sprite/mewtwo.gif",
    types: ["Psychic"],
  },
  {
    id: 151,
    name: "Mew",
    img: "https://projectpokemon.org/images/normal-sprite/mew.gif",
    types: ["Psychic"],
  },
];

/*let Pokemons = [
  new Pokemon(
    1,
    "Bulbasaur",
    "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
    ["Grass", "Poison"]
  ),
  new Pokemon(
    2,
    "Ivysaur",
    "https://projectpokemon.org/images/normal-sprite/ivysaur.gif",
    ["Grass", "Poison"]
  ),
  new Pokemon(
    3,
    "Venusaur",
    "https://projectpokemon.org/images/normal-sprite/venusaur.gif",
    ["Grass", "Poison"]
  ),
  new Pokemon(
    4,
    "Charmander",
    "https://projectpokemon.org/images/normal-sprite/charmander.gif",
    ["Fire"]
  ),
  new Pokemon(
    5,
    "Charmeleon",
    "https://projectpokemon.org/images/normal-sprite/charmeleon.gif",
    ["Fire"]
  ),
  new Pokemon(
    6,
    "Charizard",
    "https://projectpokemon.org/images/normal-sprite/charizard.gif",
    ["Fire", "Flying"]
  ),
  new Pokemon(
    7,
    "Squirtle",
    "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
    ["Water"]
  ),
  new Pokemon(
    8,
    "Wartortle",
    "https://projectpokemon.org/images/normal-sprite/wartortle.gif",
    ["Water"]
  ),
  new Pokemon(
    9,
    "Blastoise",
    "https://projectpokemon.org/images/normal-sprite/blastoise.gif",
    ["Water"]
  ),
  new Pokemon(
    10,
    "Caterpie",
    "https://projectpokemon.org/images/normal-sprite/caterpie.gif",
    ["Bug"]
  ),
  new Pokemon(
    11,
    "Metapod",
    "https://projectpokemon.org/images/normal-sprite/metapod.gif",
    ["Bug"]
  ),
  new Pokemon(
    12,
    "Butterfree",
    "https://projectpokemon.org/images/normal-sprite/butterfree.gif",
    ["Bug", "Flying"]
  ),
  new Pokemon(
    13,
    "Weedle",
    "https://projectpokemon.org/images/normal-sprite/weedle.gif",
    ["Bug", "Poison"]
  ),
  new Pokemon(
    14,
    "Kakuna",
    "https://projectpokemon.org/images/normal-sprite/kakuna.gif",
    ["Bug", "Poison"]
  ),
  new Pokemon(
    15,
    "Beedrill",
    "https://projectpokemon.org/images/normal-sprite/beedrill.gif",
    ["Bug", "Poison"]
  ),
  new Pokemon(
    16,
    "Pidgey",
    "https://projectpokemon.org/images/normal-sprite/pidgey.gif",
    ["Normal", "Flying"]
  ),
  new Pokemon(
    17,
    "Pidgeotto",
    "https://projectpokemon.org/images/normal-sprite/pidgeotto.gif",
    ["Normal", "Flying"]
  ),
  new Pokemon(
    18,
    "Pidgeot",
    "https://projectpokemon.org/images/normal-sprite/pidgeot.gif",
    ["Normal", "Flying"]
  ),
  new Pokemon(
    19,
    "Rattata",
    "https://projectpokemon.org/images/normal-sprite/rattata.gif",
    ["Normal"]
  ),
  new Pokemon(
    20,
    "Raticate",
    "https://projectpokemon.org/images/normal-sprite/raticate.gif",
    ["Normal"]
  ),
  new Pokemon(
    21,
    "Spearow",
    "https://projectpokemon.org/images/normal-sprite/spearow.gif",
    ["Normal", "Flying"]
  ),
  new Pokemon(
    22,
    "Fearow",
    "https://projectpokemon.org/images/normal-sprite/fearow.gif",
    ["Normal", "Flying"]
  ),
  new Pokemon(
    23,
    "Ekans",
    "https://projectpokemon.org/images/normal-sprite/ekans.gif",
    ["Poison"]
  ),
  new Pokemon(
    24,
    "Arbok",
    "https://projectpokemon.org/images/normal-sprite/arbok.gif",
    ["Poison"]
  ),
  new Pokemon(
    25,
    "Pikachu",
    "https://projectpokemon.org/images/normal-sprite/pikachu.gif",
    ["Electric"]
  ),
  new Pokemon(
    26,
    "Raichu",
    "https://projectpokemon.org/images/normal-sprite/raichu.gif",
    ["Electric"]
  ),
  new Pokemon(
    27,
    "Sandshrew",
    "https://projectpokemon.org/images/normal-sprite/sandshrew.gif",
    ["Ground"]
  ),
  new Pokemon(
    28,
    "Sandslash",
    "https://projectpokemon.org/images/normal-sprite/sandslash.gif",
    ["Ground"]
  ),
  new Pokemon(
    29,
    "Nidoran♀",
    "https://projectpokemon.org/images/normal-sprite/nidoran-f.gif",
    ["Poison"]
  ),
  new Pokemon(
    30,
    "Nidorina",
    "https://projectpokemon.org/images/normal-sprite/nidorina.gif",
    ["Poison"]
  ),
  new Pokemon(
    31,
    "Nidoqueen",
    "https://projectpokemon.org/images/normal-sprite/nidoqueen.gif",
    ["Poison", "Ground"]
  ),
  new Pokemon(
    32,
    "Nidoran♂",
    "https://projectpokemon.org/images/normal-sprite/nidoran-m.gif",
    ["Poison"]
  ),
  new Pokemon(
    33,
    "Nidorino",
    "https://projectpokemon.org/images/normal-sprite/nidorino.gif",
    ["Poison"]
  ),
  new Pokemon(
    34,
    "Nidoking",
    "https://projectpokemon.org/images/normal-sprite/nidoking.gif",
    ["Poison", "Ground"]
  ),
  new Pokemon(
    35,
    "Clefairy",
    "https://projectpokemon.org/images/normal-sprite/clefairy.gif",
    ["Fairy"]
  ),
  new Pokemon(
    36,
    "Clefable",
    "https://projectpokemon.org/images/normal-sprite/clefable.gif",
    ["Fairy"]
  ),
  new Pokemon(
    37,
    "Vulpix",
    "https://projectpokemon.org/images/normal-sprite/vulpix.gif",
    ["Fire"]
  ),
  new Pokemon(
    38,
    "Ninetales",
    "https://projectpokemon.org/images/normal-sprite/ninetales.gif",
    ["Fire"]
  ),
  new Pokemon(
    39,
    "Jigglypuff",
    "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif",
    ["Normal", "Fairy"]
  ),
  new Pokemon(
    40,
    "Wigglytuff",
    "https://projectpokemon.org/images/normal-sprite/wigglytuff.gif",
    ["Normal", "Fairy"]
  ),
  new Pokemon(
    41,
    "Zubat",
    "https://projectpokemon.org/images/normal-sprite/zubat.gif",
    ["Poison", "Flying"]
  ),
  new Pokemon(
    42,
    "Golbat",
    "https://projectpokemon.org/images/normal-sprite/golbat.gif",
    ["Poison", "Flying"]
  ),
  new Pokemon(
    43,
    "Oddish",
    "https://projectpokemon.org/images/normal-sprite/oddish.gif",
    ["Grass", "Poison"]
  ),
  new Pokemon(
    44,
    "Gloom",
    "https://projectpokemon.org/images/normal-sprite/gloom.gif",
    ["Grass", "Poison"]
  ),
  new Pokemon(
    45,
    "Vileplume",
    "https://projectpokemon.org/images/normal-sprite/vileplume.gif",
    ["Grass", "Poison"]
  ),
  new Pokemon(
    46,
    "Paras",
    "https://projectpokemon.org/images/normal-sprite/paras.gif",
    ["Bug", "Grass"]
  ),
  new Pokemon(
    47,
    "Parasect",
    "https://projectpokemon.org/images/normal-sprite/parasect.gif",
    ["Bug", "Grass"]
  ),
  new Pokemon(
    48,
    "Venonat",
    "https://projectpokemon.org/images/normal-sprite/venonat.gif",
    ["Bug", "Poison"]
  ),
  new Pokemon(
    49,
    "Venomoth",
    "https://projectpokemon.org/images/normal-sprite/venomoth.gif",
    ["Bug", "Poison"]
  ),
  new Pokemon(
    50,
    "Diglett",
    "https://projectpokemon.org/images/normal-sprite/diglett.gif",
    ["Ground"]
  ),
  new Pokemon(
    51,
    "Dugtrio",
    "https://projectpokemon.org/images/normal-sprite/dugtrio.gif",
    ["Ground"]
  ),
  new Pokemon(
    52,
    "Meowth",
    "https://projectpokemon.org/images/normal-sprite/meowth.gif",
    ["Normal"]
  ),
  new Pokemon(
    53,
    "Persian",
    "https://projectpokemon.org/images/normal-sprite/persian.gif",
    ["Normal"]
  ),
  new Pokemon(
    54,
    "Psyduck",
    "https://projectpokemon.org/images/normal-sprite/psyduck.gif",
    ["Water"]
  )
];*/

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("pokedex");
  for (let i = 0; i < pokemons.length; i++) {
    const newPokemon = document.createElement("div");
    newPokemon.className = "pokemon";
    if (pokemons[i].types.length > 1) {
        if (pokemons[i].types[0] == "Grass"){
        }
      newPokemon.innerHTML = `<img src=${pokemons[i].img} /><br>
      <p>Nº: ${pokemons[i].id}</p>
      <p>${pokemons[i].name}</p>
      <div class="tipos">
      <p>${pokemons[i].types[0]}</p>
      <p>${pokemons[i].types[1]}</p>`;
      list.appendChild(newPokemon);
    } else {
      newPokemon.innerHTML = `<img src=${pokemons[i].img} /><br>
      <p>Nº: ${pokemons[i].id}</p>
      <p>${pokemons[i].name}</p>
      <div class="tipos">
      <p>${pokemons[i].types[0]}</p>`;
      list.appendChild(newPokemon);
    }
  }
});
