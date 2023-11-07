window.addEventListener("DOMContentLoaded", main);

function main() {
  showScene();
}

function showScene() {
  const scene = scenes[activeSceneIndex];
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.className = "container";
  //   container.style.backgroundImage = scene.backgroundImage;
  const innerContainer = document.createElement("div");
  innerContainer.className = "innerContainer";
  const textContainer = document.createElement("div");
  textContainer.className = "textContainer";
  const text = document.createElement("p");
  text.textContent = scene.text;
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  const button1 = document.createElement("button");
  button1.textContent = scene.button1.text;
  button1.className = "buttons";
  // console.log(button1);
  const button2 = document.createElement("button");
  button2.textContent = scene.button2.text;
  button2.className = "buttons";

  button1.onclick = function () {
    goToNextScene(scene.button1.nextSceneIndex);
  };
  button2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };

  if (activeSceneIndex === 6 || activeSceneIndex === 5) {
    button2.textContent = scene.button2.text;
    button2.className = "buttons";
    button2.style.display = "none";
  } else {
    button2.textContent = scene.button2.text;
  }

  main.append(container);
  container.append(innerContainer);
  innerContainer.append(textContainer);
  textContainer.append(text);
  textContainer.append(buttonContainer);
  buttonContainer.append(button1);
  buttonContainer.append(button2);
}

// Behöver förklaras
function goToNextScene(sceneIndex) {
  const container = document.querySelector(".container");
  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }
  activeSceneIndex = sceneIndex;
  showScene();
}
