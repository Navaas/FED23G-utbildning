// När sidan startas så körs main funktionen.
window.addEventListener("DOMContentLoaded", main);

let cart = [];

/** This is the start of the program. */
function main() {
  loadCartFromLocalStorage();
  renderProducts();
  renderCartCountBadge();
}

/** Generates html elements from our data file
 * of products and renders them to the screen.
 */
function renderProducts() {
  const main = document.querySelector("#productContainer");
  // Läs den såhär: För varje produkt i "products" (produktlistan)

  // Foor Loop för att mappa ut listan
  for (const product of products) {
    const card = createProductCard(product); // Skapar ett nytt kort för varje produkt (Funktionen ligger längre ner, den ropas in i loopen)
    //console.log(product); // Nu syns listan i consolen

    // Add the card to the page. // Hela kortet i main-ytan
    main.append(card); // .prepend omvänd ordning
  }
}

/**
 * Takes a product object and creates all needed html elements
 * and styling and then returns it.
 * @param {Product} product the products object to turn into html content
 * @returns an html representation of the product objects.
 */
function createProductCard(product) {
  // Hämtar in en produkt
  // Skapar card container
  const card = document.createElement("div"); // Skapar en div
  card.className = "productCard"; // css klass

  // Skapard card title
  const title = document.createElement("h2"); // Skapar en h2
  title.textContent = product.title; // Vill att title ska visas i en h2. Hämtas från produkt, och title vill hämtas ut
  title.className = "cardTitle";

  // Create card price
  const priceLabel = document.createElement("p"); // Skapar en p tagg
  priceLabel.className = "cardPrice";
  priceLabel.textContent = product.price + " kr";

  // Create a buy button
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "cardAddButton";
  addToCartButton.textContent = "Köp";
  // Klick på köp knapparna, lägger till en ny produkt i cart listan.
  addToCartButton.onclick = function () {
    cart.push(product);
    saveCartToLocalStorage();
    renderCartCountBadge();
  };

  // Construct card with it's children
  // Nu syns det i domen
  card.append(title); // append är dom:api
  card.append(priceLabel);
  card.append(addToCartButton);

  // create/get vill du oftast returna
  return card;
}

/** Saves the global cart array to local storage */
// Spara dina produkter till localStorage. Ropas in till knappen "Köp"
function saveCartToLocalStorage() {
  // Sparar till en sträng från kundkorgen
  const cartString = JSON.stringify(cart);
  // Spara till kundvagn
  localStorage.setItem("cart", cartString);
}
/** Loads the cart from local storage and
 * saves it to the global vart array. */
function loadCartFromLocalStorage() {
  if (localStorage.key("cart")) {
    const cartString = localStorage.getItem("cart");
    cart = JSON.parse(cartString);
  }
}

/** UUpdates the cart cound badge in the header
 * based on haw many product that are in the cart.
 */
// Hämtar längden du klickat på knapparna
function renderCartCountBadge() {
  const span = document.getElementById("cartCount");
  span.textContent = cart.length;
}
