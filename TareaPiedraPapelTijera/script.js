let eleccionJugador;
let eleccionMaquina;
let opciones = ["piedra", "papel", "tijera"];
let result = document.getElementById("result");
function adivinar(eleccion) {
  eleccionJugador = eleccion;
  let numero = Math.floor(Math.random() * 3);
  eleccionMaquina = opciones[numero];

  if (eleccionJugador == eleccionMaquina) {
    console.log("Empate");
    result.textContent = "Empate";
  } else if (eleccionJugador == "piedra" && eleccionMaquina == "tijera") {
    result.textContent = "Jugador 🪨 - Maquina ✂️: Ganaste";
  } else if (eleccionJugador == "tijera" && eleccionMaquina == "papel") {
    result.textContent = "Jugador ✂️ - Maquina 📄: Ganaste";
  } else if (eleccionJugador == "papel" && eleccionMaquina == "piedra") {
    result.textContent = "Jugador 📄 - Maquina 🪨: Ganaste";
  } else if (eleccionJugador == "piedra" && eleccionMaquina == "papel") {
    result.textContent = "Jugador 🪨 - Maquina 📄: Perdiste";
  } else if (eleccionJugador == "tijera" && eleccionMaquina == "piedra") {
    result.textContent = "Jugador ✂️ - Maquina 🪨: Perdiste";
  } else if (eleccionJugador == "papel" && eleccionMaquina == "tijera") {
    result.textContent = "Jugador 📄 - Maquina ✂️: Perdiste";
  }
}
