//Pide 3 numeros al usuario
let scanner = require("readline-sync");
let mayor;
let menor;
let num1 = Number(scanner.question("Introduce un numero: "));
mayor = menor = num1;
console.log(`${num1},${mayor},${menor}`);
let num2 = Number(scanner.question("Introduce otro numero: "));
if (mayor < num2) {
  mayor = num2;
} else if (menor > num2) {
  menor = num2;
}
console.log(`${num1},${mayor},${menor}`);
let num3 = Number(scanner.question("Introduce otro numero: "));
if (mayor < num3) {
  mayor = num3;
} else if (menor > num3) {
  menor = num3;
}
console.log(`${num1},${mayor},${menor}`);

console.log(`El numero mayor es ${mayor} y el numero menor es ${menor}`);
