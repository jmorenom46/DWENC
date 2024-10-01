//Pedir una cadena de texto
let scanner = require("readline-sync");
let texto = scanner.question("Introduce un texto: ");
let lower = texto.toLowerCase();
console.log(lower);
//Declaramos una variable contador y largo de palabra
let contador = 0;
let largo = lower.length;

for (let i = 0; i < lower.length; i++) {
  let char = lower.charAt(i);

  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    contador++;
  }
}
//Mostrar numero de vocales
console.log("Hay " + contador + " vocales");
