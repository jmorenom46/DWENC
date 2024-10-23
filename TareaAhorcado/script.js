let palabra = "JUGAR";
let errores = 0;
let num;
let notIgual = true;
let numeros = [1, 2, 3, 4, 5, 6];
let letra = 0;
let aciertoFull = false;
let numAciertos = 0;
let pal = document.getElementById("palabraSecreta");
let pErrores = document.getElementById("errores");
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < palabra.length; i++) {
    pal.innerHTML += "_ ";
  }
});
function Probar() {
  if (errores == 6) {
    return;
  } else if (aciertoFull < palabra.length) {
    console.log("Probar");
    let letra = document.getElementById("letra").value.trim().toUpperCase();
    let acierto = false;
    if (acierto == false) {
      if (letra == "") {
        alert("Ingresa una letra");
      } else {
        for (let i = 0; i < palabra.length; i++) {
          if (letra == palabra.charAt(i)) {
            console.log(palabra.length);
            acierto = true;
            numAciertos++;
          } else {
            while (notIgual) {
              num = Math.floor(Math.random() * 6) + 1;
              notIgual = Comprobar(num);
            }
            let bot = document.getElementById(num);
            bot.style.backgrowndcolor = "red";
          }
        }
        if (acierto == false) {
          errores++;
          pErrores.textContent = `Numero de errores = ${errores}`;
        }
        acierto = false;
        notIgual = true;
      }
    } else {
      return;
    }
  } else {
    return;
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
