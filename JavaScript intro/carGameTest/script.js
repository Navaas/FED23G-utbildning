window.addEventListener("DOMContentLoaded", main);

function main() {
  showScenes();
}

function showScenes() {
  const scene = scenes[activeSceneIndex];
  const main = document.querySelector("main");
  // Skapar en p tagg
  const text = document.createElement("p");
  text.textContent = scene.text;

  console.log(main);

  main.append(text);
}
