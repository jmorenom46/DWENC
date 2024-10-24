let cartas = ["A", "B", "C", "D", "B", "A", "D", "C"];
let cartasMostradas = [];
let mostradas = 0;
let container = document.getElementById("container");
console.log(container);

cartas.forEach((letra) => {
  let carta = document.createElement("div");
  carta.classList.add("carta", "escondida");
  carta.dataset.letra = letra;
  console.log(carta);
  carta.onclick = function () {
    mostrarCarta(carta);
  };
  container.appendChild(carta);
});

function mostrarCarta(carta) {
  if (mostradas < 2 && tarjeta.classList.contains("escondida")) {
    carta.classList.remove("escondida");
    carta.classList.add("mostrada");
    carta.innerText = carta.dataset.fruta;
    cartasMostradas.push(carta);
    mostradas++;
    if (mostradas === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
}

function verificarPareja() {
  if (cartasMostradas[0] === cartasMostradas[1]) {
    cartasMostradas = [];
  } else {
    cartasMostradas.forEach((carta) => {
      carta.classList.remove("mostrada");
      carta.classList.add("escondida");
      carta.innerText = "";
    });
  }
}
