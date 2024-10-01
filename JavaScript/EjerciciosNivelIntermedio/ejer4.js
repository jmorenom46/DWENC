//Pedir un numero al usuario
let scanner = require("readline-sync");
let num = scanner.question("Introduce un numero: ");
let numero = Number(num);

//Mostrar la table de multiplicar por pantalla
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}
