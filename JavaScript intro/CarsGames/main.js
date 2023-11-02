window.addEventListener("DOMContentLoaded", main);

function main() {
  showScene();
}

function showScene() {
  // Hämta din html där du vill att din data ska hamna.
  const text = document.getElementById("text");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  const scene = scenes[activeSceneIndex];

  // Hämta data från objecten från scener
  text.textContent = scene.text;
  button1.textContent = scene.button1.text;
  button2.textContent = scene.button2.text;

  // Gå vidare till andra scener med hjälp av knappar
  button1.onclick = function () {
    goToNextScene(scene.button1.nextSceneIndex);
  };

  button2.onclick = () => {
    goToNextScene(scene.button2.nextSceneIndex);
  };

  function goToNextScene(sceneIndex) {
    activeSceneIndex = sceneIndex;
    showScene();
  }
}
