window.addEventListener("DOMContentLoaded", main);

const position = {
  x: 0,
  y: 0,
};

function main() {
  window.addEventListener("keydown", move);
  window.addEventListener("keyup", jump);
  setInterval(update, 10);
}

function update() {
  position.y -= 1;
  if (position.y < 0) {
    position.y = 0;
  }
  render();
}

function jump(event) {
  if (event.code === "Space") {
    position.y += 30;
    render();
  }
}

function move(event) {
  if (event.code === "ArrowLeft") {
    position.x -= 1;
    render(-1);
  }
  if (event.code === "ArrowRight") {
    position.x += 1;
    render(1);
  }
}

function render(scale) {
  const character = document.querySelector("img.char");
  character.style.left = position.x + "%";
  character.style.bottom = position.y + "%";
  if (scale) {
    character.style.transform = `scaleX(${scale})`;
  }
}
