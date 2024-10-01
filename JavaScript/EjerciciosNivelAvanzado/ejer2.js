//Solicitar una frase al usuario
let scanner = require("readline-sync");
let frase = scanner.question("Introduce una frase: ");

//Transformar la frase a array
let arr = frase.split(" ");
let cont = arr.length;
console.log(`El numero de palabras de la frase es ${cont}`);
