let ran = Math.floor(Math.random() * 100) + 1;
let counter = 0;
let result = document.getElementById("result");

function Adivinar() {
  counter++;
  let guess = document.getElementById("num").value;
  if (guess == "" || guess < 1 || guess > 100) {
    counter--;
    result.style.color = "white";
    result.textContent =
      "Debe introducir un número entre 1 y 100 antes de adivinar.";
    numero.textContent = "";
  } else if (guess == ran) {
    console.log("Correcto");
    console.log(ran);
    result.style.color = "green";
    result.textContent = "¡Correcto! Has necesitado " + counter + " intentos.";
  } else if (guess < ran) {
    console.log("Demasiado bajo");
    console.log(ran);
    result.style.color = "yellow";
    result.textContent =
      "El número " + guess + " es demasiado bajo. Intenta de nuevo.";
  } else {
    console.log("Demasiado alto");
    console.log(ran);
    result.style.color = "red";
    result.textContent =
      "El número " + guess + " es demasiado alto. Intenta de nuevo.";
  }
}
