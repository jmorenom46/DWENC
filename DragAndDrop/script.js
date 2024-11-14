const Elemento = ["Manzana", "Platano", "Caballo", "Serpiente", "Rojo", "Azul"];
const Valor = [
  "frutas",
  "frutas",
  "animales",
  "animales",
  "colores",
  "colores",
];

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  event.target.classList.add("dragging");
}

function allowDrop(event) {
  event.preventDefault();
}

function deniedDrop(event) {
  event.preventDefault();
}

function dragEnd(event) {
  event.target.classList.remove("dragging");
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  const palabra = document.getElementById(data);
}

function validar() {
  let aciertos = 0;
  const frutas = document.getElementById("frutas");
  const animales = document.getElementById("animales");
  const colores = document.getElementById("colores");
  const palabras = document.getElementsByClassName("palabras");
  for (let i = 1; i < frutas.childElementCount; i++) {
    let num = Elemento.indexOf(frutas.children[i].id);
    let val = Valor[num];
    if (val == "frutas") {
      document
        .getElementById(frutas.children[i].id)
        .classList.remove("erroneo");
      document.getElementById(frutas.children[i].id).classList.add("correcto");
      aciertos++;
    } else {
      document
        .getElementById(frutas.children[i].id)
        .classList.remove("correcto");
      document.getElementById(frutas.children[i].id).classList.add("erroneo");
    }
  }
  for (let i = 1; i < animales.childElementCount; i++) {
    let num = Elemento.indexOf(animales.children[i].id);
    let val = Valor[num];
    if (val == "animales") {
      document
        .getElementById(animales.children[i].id)
        .classList.remove("erroneo");
      document
        .getElementById(animales.children[i].id)
        .classList.add("correcto");
      aciertos++;
    } else {
      document
        .getElementById(animales.children[i].id)
        .classList.remove("correcto");
      document.getElementById(animales.children[i].id).classList.add("erroneo");
    }
  }
  for (let i = 1; i < colores.childElementCount; i++) {
    let num = Elemento.indexOf(colores.children[i].id);
    let val = Valor[num];
    if (val == "colores") {
      document
        .getElementById(colores.children[i].id)
        .classList.remove("erroneo");
      document.getElementById(colores.children[i].id).classList.add("correcto");
      aciertos++;
    } else {
      document
        .getElementById(colores.children[i].id)
        .classList.remove("correcto");
      document.getElementById(colores.children[i].id).classList.add("erroneo");
    }
  }
  if (aciertos == 6) {
    setTimeout(() => {
      document.getElementById("validar").classList.add("eliminar");
      document.getElementById("validar").remove;
      setTimeout(() => {
        document.getElementById("resultado").classList.remove("ocultar");
        document.getElementById("resultado").classList.add("mostrar");
      }, 1000);
    }, 500);
  }
}
