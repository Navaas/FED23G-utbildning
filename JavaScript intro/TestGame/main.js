window.addEventListener("DOMContentLoaded", main);

function main() {
  showScene();
}

function showScene() {
  const scene = scenes[activeSceneIndex];

  const main = document.querySelector("main");
  const text = document.createElement("h2");
  text.textContent = scene.text;

  const button1 = document.createElement("button");
  button1.textContent = scene.button1.text;
  // console.log(button1);
  const button2 = document.createElement("button");
  button2.textContent = scene.button2.text;

  button1.onclick = function () {
    goToNextScene(scene.button1.nextSceneIndex);
  };
  button2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };

  main.append(text);
  main.append(button1);
  main.append(button2);
}

function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  showScene();
}
