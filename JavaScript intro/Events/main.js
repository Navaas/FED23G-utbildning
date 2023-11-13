window.addEventListener("DOMContentLoaded", main);

function main() {
  document.addEventListener("click", placeCircle); // Klickar du dyker en röd cirkel upp.
  document.querySelector("h1").addEventListener("mouseover", setRandomColor); // Hovrar du över byter den färg.
  document.querySelector("h2").addEventListener("mouseover", setRandomColor); // Hovrar du över byter den färg.
}

// Detta är funktionen för den röda cirkeln, när man klickar, sen fadar den ut.
function placeCircle(event) {
  const circle = document.createElement("div");
  circle.classList = "circle";
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";

  document.body.append(circle);
  setTimeout(() => {
    document.body.removeChild(circle);
  }, 1000);
}

function setRandomColor(event) {
  event.currentTarget.style.color = getRandomColor();
}
// Detta är en funktion som väljer färger random
function getRandomColor() {
  const chars = "0123456789abcdef";
  const r = chars[Math.floor(Math.random() * 16)];
  const g = chars[Math.floor(Math.random() * 16)];
  const b = chars[Math.floor(Math.random() * 16)];
  return "#" + r + g + b;
}
