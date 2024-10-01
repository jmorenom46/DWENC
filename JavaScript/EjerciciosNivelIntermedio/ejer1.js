//Pedir un número al usuario
let scanner = require("readline-sync");
let num = scanner.question("Introduce un numero: ");

//Comprobar si es par o impar y mostrarlo por consola
if (num / 2 == 0) {
  console.log("El numero " + num + " es par.");
} else {
  console.log("El numero " + num + " es impar.");
}
