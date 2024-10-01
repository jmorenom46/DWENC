//Pedir numero al usuario
let scanner = require("readline-sync");
let num = scanner.question("Introduce un numero: ");

//Calcular el factorial del numero introducido.
let fac = 1;
for (let i = 1; i <= num; i++) {
  fac *= i;
}
//Mostrar factorial por consola.
console.log("El factorial de " + num + " es " + fac);
