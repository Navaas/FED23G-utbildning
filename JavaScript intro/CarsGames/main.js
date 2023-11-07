window.addEventListener("DOMContentLoaded", main);

function main() {
  showScene();
}

function showScene() {
  const scene = scenes[activeSceneIndex];
  // Hämta din html där du vill att din data ska hamna.
  const text = document.getElementById("text");
  const buttonContainer = document.getElementById("button-container");

  const buttonArray = document.getElementById("buttonArray");
  buttonArray.textContent = scene.buttonArray;

  // Hämta data från objecten från scener
  text.textContent = scene.text;
  buttonContainer.innerHTML = "";
  for (const buttonData of scene.buttons) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonData.text;
    buttonElement.onclick = function () {
      goToNextScene(buttonData.nextSceneIndex);
    };
    buttonContainer.append(buttonElement);
  }

  if (activeSceneIndex === 6) {
    buttonArray.textContent = scene.buttonArray;
    buttonArray.classList.add("button");
    buttonArray.style.display = "block";
  } else {
    buttonArray.style.display = "none";
  }

  //Skapa en loop so kollar om video är aktiverat i scenar.
  // if (video === video) {
  //   console.log("Se din film");
  // }

  // Gå vidare till andra scener med hjälp av knappar

  function goToNextScene(sceneIndex) {
    activeSceneIndex = sceneIndex;
    showScene();
  }
}

function itemButton() {
  const items = ["Skiftnyckel", "Däck", "Motorolja", "Bultmaskin", "Papper"];
  const h2 = document.createElement("h2");
  for (const item of items) {
    h2.innerText = item;

    console.log(item);
  }
  h2.append(items);
}
