// När sidan startas så körs main funktionen.
window.addEventListener("DOMContentLoaded", main);

function main() {
  renderProducts();
}

function renderProducts() {
  console.log(products); // "Poducts / data.js"  hittas för att den ligger i det globala scoopet i html filen.
}

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
  priceLabel.textContent = product.price;

  // Create a buy button
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "cardAddButton";
  addToCartButton.textContent = "Köp";

  // Construct card with it's children
  // Nu syns det i domen
  card.append(title); // append är dom:api
  card.append(priceLabel);
  card.append(addToCartButton);

  // create/get vill du oftast returna
  return card;
}
