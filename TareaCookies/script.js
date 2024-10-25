function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let c = cookie.trim();
    if (c.startsWith(`${name}=`)) return c.substring(name.length + 1);
  }
  return null;
}

function setCookie(name, value, mins) {
  let expires = "";
  if (mins) {
    const date = new Date();
    date.setTime(date.getTime() + mins * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function addToCart(producto) {
  let cart = getCookie("cart");
  cart = cart ? JSON.parse(cart) : [];

  const index = cart.findIndex((item) => item.producto === producto);

  console.log(index);
  if (index === -1) {
    cart.push({ producto, cantidad: 1 });
  } else {
    cart[index].cantidad++;
  }

  setCookie("cart", JSON.stringify(cart), 5);
  MostrarCarrito();
}

function MostrarCarrito() {
  let cart = getCookie("cart");
  cart = cart ? JSON.parse(cart) : [];
  const cartContainer = document.getElementById("carrito");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>No tienes productos en tu carrito.</p>";
  } else {
    cartContainer.innerHTML = "";
    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className = "elemento-carrito";
      itemElement.innerHTML = `<span>${item.producto} (x${item.cantidad})</span><button onclick="EliminarProducto('${item.producto}')">Eliminar</button>`;
      cartContainer.appendChild(itemElement);
    });
  }
}

function EliminarProducto(producto) {
  let cart = getCookie("cart");
  cart = cart ? JSON.parse(cart) : [];

  const index = cart.findIndex((item) => item.producto === producto);

  console.log(index);
  if (index === -1) {
  } else if (cart[index].cantidad > 0) {
    cart[index].cantidad--;
    console.log(cart);
    if (cart[index].cantidad === 0) {
      cart.splice(index, 1);
    }
  }

  setCookie("cart", JSON.stringify(cart), 5);
  MostrarCarrito();
}

function EliminarCarrito(){
    
}

window.onload = function () {
  MostrarCarrito();
};
