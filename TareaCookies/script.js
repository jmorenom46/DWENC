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
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + mins * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function addToCart() {
  let cart = getCookie("cart");
  cart = cart ? JSON.parse(cart) : [];

  const index = cart.findIndex((item) => item.product === product);

  if (index === -1) {
    cart.push({ product, quantity: 1 });
  } else {
    cart[index].quantity++;
  }

  setCookie("cart", JSON.stringify(cart), 5);
  MostrarCarrito();
}

function MostrarCarrito() {
  const cart = getCookie("cart");
  cart = cart ? JSON.parse(cart) : [];

  const cartContainer = document.getElementById("carrito");
}
