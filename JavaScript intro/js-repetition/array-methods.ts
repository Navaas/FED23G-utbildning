/**
 * Problem: Sök fram rätt sak i en array och skriver ut saken.
 * Skriver även ut om saken inte hittades.
 */

const items = ["Julgran", "Julmat", "Ljus", "Snö", "Pepparkakor"];
const query = "Julmat";
// Denna funkar bara om det är en array (includes).
if (items.includes(query)) {
  // Ta bort items. Så körs funktionen som jag byggt nedan. Men nu körs den med den inbyggda.
  console.log(`${query} hittades!`);
} else {
  console.log(`Tyvärr hittades inte ${query}..`);
}

// Includes (2, [1, 2, 3]Nedan har vi byggt en likadan funktion som den inbyggda .includes (se ovan)
function includes(query, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item === query) {
      return true;
    }
  }
  return false;
}
