//Pedir al usuario un numero por pantalla
let scanner = require("readline-sync");

let num1 = scanner.question("Introduce un número por pantalla: ");
if (num1 > 10) {
  console.log(num1 + " Es mayor que 10");
}
