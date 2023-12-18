/**
 * Problem: Sök fram rätt sak i en array och skriver ut saken.
 * Skriver även ut om saken inte hittades.
 */

const items = ["Julgran", "Julmat", "Ljus", "Snö", "Pepparkakor"];
const query = "Julgran";

let isItemFound = false; // Sparar undan item i en egen lista.

for (const item of items) {
  // För items av alla items, imperativa foor loopen.
  if (item === query) {
    console.log(`${query} hittades!`); // Template string/literals.
    isItemFound = true;
    break;
  }
}

if (!isItemFound) {
  console.log("Tyvärr hittades inte.." + query + "..");
}
