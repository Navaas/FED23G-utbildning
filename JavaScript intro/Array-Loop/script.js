// En funktion som är kopplad till en knapp. En for loop som loopar ut hela array-listan när man klickar på knappen så syns det i consolen
function cars() {
  const cars = ["Volvo", "Saab", "BMV", "Tesla"]; // Listan med hela arrayen

  for (const car of cars) {
    // Här loppas varje bilmärke i hela arrayen. Ett bilmärke i taget
    console.log(car); // Skriver ut arrayen i consolen
  }
}
//  Ta bort bilar
const moreCars = ["Volvo", "Saab", "Tesla", "Fiat"];
function deleteCar() {
  console.log(moreCars.pop());
  console.log(moreCars);
}

// Lägg till en bil i arrayen
function addCar() {
  let newCar = prompt("Skriv in ny bil");
  moreCars.push(newCar);
  console.log(moreCars);
}
// En funktion som loopar ut namn via en knapp till consolen (Samma som ovan)
function firstName() {
  const firstName = ["Michaela", "Anna", "Sally", "Nathalie", "Ida"];
  for (const name of firstName) {
    console.log(name);
  }
}

// En funktion som loopar ut namn via en knapp som syns i webbläsaren och i consolen
function names() {
  const names = ["Kalle", "Victor", "David", "Sten", "Bertil"]; // Array med namn
  for (const name of names) {
    // När loopas ett namn i taget som finns i arrayen
    console.log(name); // Här syns arreyen i consolen
    const h4 = document.createElement("h4"); // Här skapas en h4

    h4.innerText = name; // h4 tilldelas med hjälp av innesText i detta fall alla namn som loopas
    document.body.appendChild(h4); // Nu skrivs den ut i html/webbläsaren
  }
}

// En array med flera objekt (listan med objekt kan vara hur lång som helst)
const products = [
  {
    productName: "Shoes",
    price: 799,
  },
  {
    productName: "T-shirt",
    price: 299,
  },
  {
    productName: "Hat",
    price: 1799,
  },
];
// En funktion som är kopplad till en knapp. Den loopar ut hela arrayen. Det har skapats en div, h6 och en paragraf
function printProducts() {
  for (const product of products) {
    // Här loppar den igenom ett objekt i taget i arreyen
    const div = document.createElement("div"); // Skapa nya element med createElement. Nu skapas en div med hjälp av JavaScript
    const h6 = document.createElement("h6"); // Nu skapas en h6 med hjälp av JavaScript
    const para = document.createElement("p"); // Nu hämtas en paragraf <P> med JavaScript

    h6.innerText = product.productName; //Vill tilldela texten från objektet här blir det Shoes, T-shirt och Hat
    para.innerText = product.price; // Här tilldelas pris
    div.append(h6, para); // Här vill du läggga in en h6 och en <p> i en div

    document.body.appendChild(div); // Här skriver den ut hela diven i html/webbläsaren
    console.log(product); // Objecten syns i consolen
  }
}

function searchCar() {
  let searchCar = prompt("Sök efter en bil");
  const cars = ["Volvo", "Saab", "Fiat", "Tesla"];
  for (const car of cars) {
    if (car === searchCar) console.log("det finns en sån bil" + searchCar);
    else {
      console.log("Finns ingen" + searchCar);
    }
  }
}
