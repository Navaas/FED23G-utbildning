// När sidan startas så körs main funktionen.
window.addEventListener("DOMContentLoaded", main);

function main() {
  renderProducts();
}

function renderProducts() {
  console.log(products); // "Poducts" känner den av för att den ligger i det globala scoopet i html filen.
}
