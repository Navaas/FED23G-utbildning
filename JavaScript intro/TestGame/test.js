window.addEventListener("DOMContentLoaded", main);

function main() {
  showScene();
}

function showScene() {
  const scene = scenes[activeSceneIndex];

  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.className = "container";

  const containerButton = document.createElement("div");
  containerButton.className = "containerButton";

  const containerText = document.createElement("div");
  containerText.className = "containerText";

  containerText.innerHTML = "";
  for (const text of scene.texts) {
    const textElement = document.createElement("p");
    textElement.textContent = text.text;
    console.log(scene.texts);
  }

  containerButton.innerHTML = "";
  for (const buttonData of scene.buttons) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonData.text;
    console.log(buttonData.text);
    buttonElement.onclick = function () {
      goToNextScene(buttonData.nextSceneIndex);
    };

    main.append(container);
    container.append(containerText);
    container.append(containerButton);
    containerText.append(textElement);
    containerText.append(buttonElement);
  }

  function goToNextScene(sceneIndex) {
    const container = document.querySelector(".container");
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    activeSceneIndex = sceneIndex;
    showScene();
  }
}
