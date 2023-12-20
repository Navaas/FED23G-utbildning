/**
 * Problem: Sök fram rätt sak i en array och skriver ut saken.
 * Skriver även ut om saken inte hittades.
 */

const items = ["Julgran", "Julmat", "Ljus", "Snö", "Pepparkakor"];
const query = "Snö";

let isItemFound = false;
items.forEach((item) => {
  if (item === query) {
    console.log(`${query} hittades!`);
    isItemFound = true;
  }
});
// Man får inte använda break.

if (isItemFound) {
  console.log(`Tyvärr hittades inte ${query}..`);
}
// items.forEach(function (item) {
//   // Samma som ovan, bara att function är definierat. Denna syns inte lika ofta.
// });
