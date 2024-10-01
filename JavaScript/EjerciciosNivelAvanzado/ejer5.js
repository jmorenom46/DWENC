//Pedir un numero al usuario
let scanner = require("readline-sync");
let num = Number(scanner.question("Introduce un numero: "));
var cond = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    cond = false;
  }
}
console.log("El numero " + (cond ? "es primo" : "no es primo"));
