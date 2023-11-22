window.addEventListener("DOMContentLoaded", main);

function main() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d"); /* Man kan förkorta det till ctx */

  context.fillRect(25, 25, 100, 100);
  context.clearRect(45, 45, 60, 60);
  context.strokeRect(50, 50, 50, 50);
}
