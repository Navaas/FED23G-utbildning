window.addEventListener("DOMContentLoaded", main);

function main() {
  showScene();
}

function showScene() {
  // Hämtar ut dina html
  const text = document.getElementById("text");
  const button1 = document.getElementById("btn1");
  const button2 = document.getElementById("btn2");

  const scene = scenes[activeSceneIndex];

  // Hämtar data från objectet från scenes
  text.textContent = scene.text;
  button1.textContent = scene.button1.text;
  button2.textContent = scene.button2.text;
  //Gå vidare till andra scener
  button1.onclick = function () {
    goToNextScene(scene.button1.nextSceneIndex);
    //button1.onclick = () => goToNextScene(scene.button1.goTo) Denna är samma som den ovan. Anonyn arrow funktion
  };
  button2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
    //button2.onclick = () => goToNextScene(scene.button2.goTo) Denna är samma som den ovan
  };

  function goToNextScene(sceneIndex) {
    activeSceneIndex = sceneIndex;
    showScene();
  }
}
