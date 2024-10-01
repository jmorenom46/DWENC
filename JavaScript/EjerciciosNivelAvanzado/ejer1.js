//Pedir 2 numeros al usuario
let scanner = require("readline-sync");
let num1 = scanner.question("Introduce un numero: ");
let numero1 = Number(num1);
let num2 = scanner.question("Introduce otro numero: ");
let numero2 = Number(num2);
let op = scanner.question(
  "Que operacion va a realizar: 1.-Suma, 2.-Resta, 3.-Multiplicacion, 4.-Division: "
);
let num = Number(op);
switch (num) {
  case 1: {
    console.log(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`);
    break;
  }
  case 2: {
    console.log(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2}`);
    break;
  }
  case 3: {
    console.log(
      `La multiplicacion de ${numero1} y ${numero2} es ${num1 * num2}`
    );
    break;
  }
  case 4: {
    console.log(
      `La division de ${numero1} y ${numero2} es ${numero1 / numero2}`
    );
    break;
  }
}
