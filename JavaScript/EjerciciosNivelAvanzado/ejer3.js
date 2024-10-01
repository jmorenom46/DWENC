//Pedir una cadena al usuario
let scanner = require("readline-sync");
let palabra = scanner.question("Introduce una palabra: ");
let num = palabra.length;
let inv = "";
for (i = num - 1; i >= 0; i--) {
  inv += palabra.charAt(i);
}
console.log(`La palabra inversa de ${palabra} es ${inv}`);
