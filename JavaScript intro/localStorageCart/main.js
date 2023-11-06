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
    //console.log(product); // Nu syns listan i consolen
    const card = document.createElement("div"); // Skapar en div
    card.textContent = product.title; // Vill att title ska visas

    // Var det ska ligga, nu i main. Funkar med getByElementById också
    main.append(card);
  }
}
