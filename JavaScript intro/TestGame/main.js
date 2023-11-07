window.addEventListener("DOMContentLoaded", main);

function main() {
  showScene();
}

function showScene() {
  const scene = scenes[activeSceneIndex];
  // Hämta ut main där all html ska skrivas ut
  const main = document.querySelector("main");
  // Den stora diven med bilder som bakgrund
  const container = document.createElement("div");
  container.className = "container";
  // Inner container (den vita)
  const innerContainer = document.createElement("div");
  innerContainer.className = "innerContainer";
  //   innerContainer.style.backgroundImage = scene.backgroundImage;
  // Container för text och knappar
  const textContainer = document.createElement("div");
  textContainer.className = "textContainer";
  // p tagg för text
  const text = document.createElement("p");
  text.textContent = scene.text;
  // Container för knappar
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  // Knapp 1
  const button1 = document.createElement("button");
  button1.textContent = scene.button1.text;
  button1.className = "buttons";
  // Knapp 2
  const button2 = document.createElement("button");
  button2.textContent = scene.button2.text;
  button2.className = "buttons";

  const items = ["Skruvmejsel", "Skiftnyckel", "Motorolja", "Däck"];
  const itemh1 = document.createElement("h1");
  for (const item of items) {
    itemh1.textContent = items;
    console.log(items);
  }

  if (activeSceneIndex === 5) {
    itemh1.textContent = items;
  } else {
    itemh1.textContent = items;
    itemh1.style.display = "none";
  }

  // Funktioner för knapparna som ska byta scen
  button1.onclick = function () {
    goToNextScene(scene.button1.nextSceneIndex);
  };
  button2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };

  // Funktion för att dölja knapp i scen 5 och 6
  if (activeSceneIndex === 6 || activeSceneIndex === 5) {
    button2.textContent = scene.button2.text;
    button2.className = "buttons";
    button2.style.display = "none";
  } else {
    button2.textContent = scene.button2.text;
  }

  // Här anropas allt för att det ska synas i dom:en
  main.append(container);
  container.append(innerContainer);
  innerContainer.append(textContainer);
  textContainer.append(text);
  textContainer.append(buttonContainer);
  textContainer.append(itemh1);
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
