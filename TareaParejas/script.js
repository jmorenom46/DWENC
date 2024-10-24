let cartas = ["🍎", "🍉", "🍋", "🍎", "🍋", "🍉", "🫐", "🫐"];
let cartasMostradas = [];
let mostradas = 0;
let container = document.getElementById("container");
let aciertos = 0;
cartas.forEach((fruta) => {
  let carta = document.createElement("div");
  carta.classList.add("carta", "escondida");
  carta.dataset.fruta = fruta;
  carta.onclick = function () {
    mostrarCarta(carta);
  };
  container.appendChild(carta);
});

function mostrarCarta(carta) {
  if (mostradas < 2 && carta.classList.contains("escondida")) {
    carta.classList.remove("escondida");
    carta.classList.add("mostrada");
    carta.innerText = carta.dataset.fruta;
    console.log("push carta");
    cartasMostradas[mostradas] = carta;
    mostradas++;
    if (mostradas === 2) {
      setTimeout(verificarPareja, 1000);
      mostradas = 0;
    }
  }
}

function verificarPareja() {

  if (cartasMostradas[0].dataset.fruta === cartasMostradas[1].dataset.fruta) {
    for (let i = 0; i < 2; i++) {
      cartasMostradas.splice(0, 1);
      console.log(cartasMostradas);
    }
    aciertos += 2;
    if (aciertos == cartas.length) {
      alert("Ganaste");
    }
  } else {
    cartasMostradas.forEach((carta) => {
      carta.classList.remove("mostrada");
      carta.classList.add("escondida");
      carta.innerText = "";
    });
  }
}
