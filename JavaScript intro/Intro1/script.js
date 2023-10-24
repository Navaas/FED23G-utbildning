// Skriv console.log för att se så Javascript filen är igång.
console.log("Hello world"); // "Hello world"  skrivs ut i consolen
console.log("Hej, Jag heter Michaela"); // "Hej, jag heter Michaela" skrivs ut i consolen.
// Syns detta i consolen så funkar script-filen.

// En pop-up ruta med en fråga dyker upp.
const firstName = prompt("Vad heter du?");
console.log(firstName); // Svaret användaren skriver in skrivs ut i consolen.
alert(firstName); // Användarens svar skrivs ut i en alert pop-up ruta.

// Skriv in två nummer i pop-up rutorna
let num1 = Number(prompt("Skriv in en siffra"));
let num2 = Number(prompt("Skriv in ett annat nummer"));
let total = num1 + num2; // Användarens siffror från pop-up rutorna adderas med vaandra.

console.log(total); // Resultatet syns i consolen
alert(total); // Resultatet syns i en alert ruta

// Skriv in din favoritfärg i pop-up rutan
const color = prompt("Vilken är din favoritfärg?"); // Användaren svarar i pop-up rutan. Detta är en global variabel. Den ligger utanför funktionen, så andra funktioner kan nå den.
function favColor() {
  // Denna funktion är kopplad till en knapp. Klickar man på knappen skrivs användarens svar ut i consolen.
  console.log(color); // Svaret syns i consolen
}

// Detta är en funktion som tar in namn.
function printName(name, lastname) {
  alert(name + " " + lastname); // Den skriver ut svaret i en alert ruta
  console.log(name, lastname); // Svaret syns även i consolen
}

printName("Michaela", "Andreasson"); // Här är det hårdkodat vilka namn och funktionen anropas.

// Detta är en funktion som ändrar texten på en befintlig h1:a. Klickar du på knappen kommer en pop-up ruta.
function changeHeading() {
  const heading = document.getElementById("heading"); //document.querySelector("#heading") funkar också för att hämta ett id.
  const text = prompt("Skriv något kul"); // Texten som skrivs här kommer ändra texten på befintlig h1:a
  heading.innerText = text; // innerText, man sätter och tilldelar en text
}

// En funktion som ändrar färgen slumpvis på två divar.
function changedColor() {
  const leftBox = document.querySelector("#leftBox"); // Här hämtas in elementet baserat på det unika id:t
  const rightBox = document.querySelector("#rightBox"); // Här hämtas in elementet baserat på det unika id:t
  const leftH3 = document.getElementById("leftH3"); // Här hämtas in elementet baserat på det unika id:t
  const rightH3 = document.getElementById("rightH3"); // Här hämtas in elementet baserat på det unika id:t
  //console.log(leftBox, rightBox, leftH3, rightH3); // Kollar så att det skrivs ut i consolen

  // c1, c2, c3 (c = color) Genererar random nummer mellan 0-255
  const c1 = Math.floor(Math.random() * 255); // Math är inbyggt i Javascript. Funktionen random ger oss ett slumpmässigt tal mellan 0-1.
  const c2 = Math.floor(Math.random() * 255); // rgb färg grår upp till 255
  const c3 = Math.floor(Math.random() * 255); // Man kan avrunda Math.floor avrundas neråt, Math.ceil avrundas neråt.

  // Bygger strängar som liknar rgb (se ovan)
  const color = `rgb(${c1}, ${c2}, ${c3})`;
  leftBox.style.backgroundColor = color; // hämta ett element och styla det med style.background tex. Här man man göra allt som i css via style
  rightBox.style.backgroundColor = color;

  leftH3.innertext = color;
  rightH3.innerText = color;
}
