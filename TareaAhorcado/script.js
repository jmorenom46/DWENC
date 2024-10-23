let palabra = "JUEGO";
let errores = 0;
let num;
let letras = [];
let notIgual = true;
let numeros = [1, 2, 3, 4, 5, 6];
let botones = [
  (bot1 = document.getElementById(1)),
  (bot2 = document.getElementById(2)),
  (bot3 = document.getElementById(3)),
  (bot4 = document.getElementById(4)),
  (bot5 = document.getElementById(5)),
  (bot6 = document.getElementById(6)),
];
let letra = 0;
let aciertoFull = false;
let numAciertos = 0;

let pal = document.getElementById("palabraSecreta");
let pErrores = document.getElementById("errores");
document.addEventListener("DOMContentLoaded", function () {
  /*for (let i = 0; i < palabra.length; i++) {
    pal.innerHTML += "_ ";
  }*/
  for (let i = 0; i < palabra.length; i++) {
    letras.push("_ ");
  }
  pal.textContent = letras.join("");
});
function Probar() {
  if (errores == 6) {
    return;
  } else if (aciertoFull < palabra.length) {
    let letra = document.getElementById("letra").value.trim().toUpperCase();
    let acierto = false;
    console.log(letra);
    if (acierto == false) {
      if (letra == "") {
        alert("Ingresa una letra");
      } else {
        for (let i = 0; i < palabra.length; i++) {
          if (letra == palabra.charAt(i)) {
            console.log(palabra.length);
            acierto = true;
            numAciertos++;
            letras[i] = letra;
            pal.textContent = letras.join("");
            pErrores.textContent = "¡Acierto!";
            setTimeout(() => {
              pErrores.textContent = `Numero de errores = ${errores}`;
            }, 1500);
          } else {
            while (notIgual) {
              num = Math.floor(Math.random() * botones.length);
              notIgual = Comprobar(num);
            }
          }
        }

        if (acierto == false) {
          errores++;
          if (errores == 6) {
            numeros.splice(num, 1);
            botones[num].style.backgroundColor = "red";
            botones.splice(num, 1);
            console.log(botones);
            pErrores.textContent = `Juego terminado. Perdiste`;
          } else {
            numeros.splice(num, 1);
            botones[num].style.backgroundColor = "red";
            botones.splice(num, 1);
            console.log(botones);
            pErrores.textContent = `Numero de errores = ${errores}`;
          }
        }
        acierto = false;
        notIgual = true;
      }
    } else {
      return;
    }
  } else {
    pErrores.textContent = `¡Has completado la palabra secreta!`;
  }
}
function Comprobar(num) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == num) {
      return true;
    } else {
      return false;
    }
  }
}
