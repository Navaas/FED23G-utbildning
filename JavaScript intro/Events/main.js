window.addEventListener("DOMContentLoaded", main);

function main() {
  document.addEventListener("click", placeCircle);
  document.querySelector("h1").addEventListener("mouseover", setRandomColor);
}

function placeCircle(event) {
  console.log(event.x, event.y);
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = event.x + "px"; // Man kan skriva clientX
  circle.style.top = event.y + "px"; // ClientY

  document.body.append(circle);
  setTimeout(() => {
    document.body.removeChild(circle);
  }, 1000);
}

function setRandomColor(event) {
  event.currentTarget.style.color = getRandomColor;
}

function getRandomColor() {
  const chars = "123456789abcdef";
  const r = chars[Math.floor(Math.floor) * 16];
  const g = chars[Math.floor(Math.floor) * 16];
  const b = chars[Math.floor(Math.floor) * 16];
  return "#" + r + g + b;
}
