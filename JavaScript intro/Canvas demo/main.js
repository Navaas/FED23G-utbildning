window.addEventListener("DOMContentLoaded", main);

function main() {
  const canvas = document.querySelector("canvas"); // Hämtar ut canvas från index.html
  const context =
    canvas.getContext("2d"); /* Man kan förkorta context till ctx */
  /* enabelFullscreen kommer inte användas om inte webbläsarfönstret ändras */
  enableFullScreen(canvas, context); /* Funktionen anropar canvas och context*/
  draw(context); /* Funktionen anropar context*/
}

/* Sätter canvas till fullscreen, funtkionen anropar två variabler */
function enableFullScreen(canvas, context) {
  setFullScreen(canvas);
  window.addEventListener("resize", () => {
    setFullScreen(canvas); // Här ändras windowsfönstret
    draw(context); // Nu målas rutan alltid upp, även vid ändring av webbläsarfönstret ändras.
  });
}

/* Här ritas värdet ut från canvas. Default värdet är alltid svart #000 */
/**
 *
 * @param {CanvasRenderingContext2D} context
 */
function draw(context) {
  context.fillStyle = "red"; // Tjock pensel
  context.strokeStyle = "blue"; // Mindre pensel
  context.fillRect(25, 25, 100, 100); // En fylld ruta syns
  context.clearRect(45, 45, 60, 60); // Genomskinlig ruta / Eller ett hål i rutan
  context.strokeRect(50, 50, 50, 50); // En liten ram innuti
}

/* Sätter till fullscreen den blir reponsive */
function setFullScreen(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
