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
  container.style.backgroundImage = scene.backgroundImage;
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

  // Visa video
  const video = document.createElement("video");
  video.src = scene.video;
  video.controls = true;

  // Item array
  const itemsArray = document.createElement("h2");
  itemsArray.textContent = scene.items;
  console.log(scene);
  // Array med saker i Bärgans verkstad

  //   for (const item of items) {
  //     itemsArray.textContent = scene.items;
  //     console.log(items);
  //   }

  //   if (activeSceneIndex === 6) {
  //     itemh1.textContent = items;
  //   } else {
  //     itemh1.textContent = items;
  //     itemh1.style.display = "none";
  //   }
  for (item of itemsArray) {
    scene.items;
  }
  // Funktioner för knapparna som ska byta scen
  button1.onclick = function () {
    goToNextScene(scene.button1.nextSceneIndex);
  };
  button2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };

  // Funktion för att dölja knapp i scen 5 och 6
  if (
    activeSceneIndex === 6 ||
    activeSceneIndex === 5 ||
    activeSceneIndex === 7
  ) {
    button2.textContent = scene.button2.text;
    button2.className = "buttons";
    button2.style.display = "none";
  } else {
    button2.textContent = scene.button2.text;
  }

  // Här anropas allt för att det ska synas i dom:en
  main.append(container);
  container.append(textContainer);
  textContainer.append(text);
  textContainer.append(buttonContainer);
  textContainer.append(itemsArray);
  textContainer.append(video);
  buttonContainer.append(button1);
  buttonContainer.append(button2);
}

// Behöver förklaras?
function goToNextScene(sceneIndex) {
  const container = document.querySelector(".container");
  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }
  activeSceneIndex = sceneIndex;
  showScene();
}

// Göra imorgon: Lägga till item array i en ny scen. Testa att lägga på bilder istället för ord?
