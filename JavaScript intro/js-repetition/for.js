/**
 * Problem: Sök fram rätt sak i en array och skriver ut saken.
 * Skriv även ut om saken inte hittades.
 */

const items = ["Julgran", "Julmat", "Ljus", "Snö", "Pepparkakor"];
const query = "Tomten";

// Klassisk for loop. i++ är samma som öka med 1.
let isItemFound = false; // Sparar undan det hittade item's i en egen lista

for (let i = 0; i < items.length; i++) {
  const item = items[i]; // Man kan skriva items.at(i) också, det gör samma sak
  if (item === query) {
    console.log(query + " hittades!");
    isItemFound = true;
    break; // Hittar den "snö", skrivs det ut och sen avbryts loopen
  }
}
if (!isItemFound) {
  // ! inte operatorn, "Om inte isItemFound är hittad skriv ut "Tyvärr hittades inte",
  console.log(`"Tyvärr hittades inte" ${query}..`);
}
