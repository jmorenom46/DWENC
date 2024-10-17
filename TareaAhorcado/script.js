let palabra = "JUGAR";
let errores = 0;
let igual = false;
let ids;
let pal = document.getElementById("palabraSecreta");
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < palabra.length; i++) {
    pal.innerHTML += "_ ";
  }
});

function Comprobar() {
  if (errores == 6) {
  } else {
    let letra = document.getElementById("letra").value;
    let acierto = false;
    for (let i = 0; i < palabra.length; i++) {
      if (letra == palabra[i]) {
        acierto = true;
      }
    }
    if (acierto) {
    } else {
      errores++;
      let num = Math.floor(Math.random() * 6) + 1;
      for (let i = 0; i < ids.length; i++) {
        if (){

        }
      }
    }
  }
}
