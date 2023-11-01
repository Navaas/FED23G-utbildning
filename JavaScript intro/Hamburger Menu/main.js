// Istället för defer i html
window.addEventListener("DOMContentLoaded", main);

/** Starten på vårat program, här vill vi starta/initiera
 * allt som behövs för att börja */

function main() {
  setupEventListeners();
  startClock();
}
/* Exempel på saker man skulle kunna göra när programmet startar*/

// fetchInstagramFriends();

function startClock() {
  setInterval(displayTime, 1000);
}

// Nu visas det en klocka som tickar i headern
function displayTime() {
  const date = new Date();
  const clockElement = document.getElementById("clock");
  clockElement.textContent = date.toLocaleTimeString();
}

function setupEventListeners() {
  const menuButton = document.getElementById("menuButton");
  // console.log(menuButton); Kollar så det kommer ut i consolen
  menuButton.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  // 1. Hämta hedern
  // console.log("TOGGLE MENU"); Kickar man på iconen så syns texten "Toggle Menu"
  const header = document.querySelector("header"); // Hämtar hela header taggen
  //console.log(header);
  // 2. Lägg till en klass "open"
  header.classList.toggle("open"); // Classlist kan man lägga till/ta bort/funktion toggle av/på
}
