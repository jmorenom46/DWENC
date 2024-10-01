//Pedir nota al usuario y determinar si aprobo
let scanner = require("readline-sync");
let nota = Number(scanner.question("Introduce tu nota: "));
console.log("El alumno " + (nota >= 60 ? "aprobo" : "no aprobo"));
