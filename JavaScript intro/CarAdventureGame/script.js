window.addEventListener("DOMContentLoaded", main);

function main() {
  showScene();
  renderItemList();
  createItemCard();
}

function showScene() {
  const scene = scenes[activeSceneIndex];
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.className = "container";

  const containerTitle = document.createElement("div");
  containerTitle.className = "containerTitle";

  const containerStoryText = document.createElement("p");
  containerStoryText.className = "containerStoryText";

  const containerButton = document.createElement("div");
  containerButton.className = "containerButton";

  const containerVideo = document.createElement("div");
  containerVideo.className = "containerVideo";

  const itemCard = document.createElement("div");
  itemCard.className = "itemCard";

  // Item array
  // itemCard.innerHTML = "";
  // for (const item of scene.itemsList) {
  //   const testText = document.createElement("p");
  //   testText.textContent = item.item;
  //   container.append(itemCard);
  //   itemCard.append(testText);
  // }

  // for (const title of scene.itemsList) {
  //   const textButton = document.createElement("button");
  //   textButton.textContent = title.text;
  //   container.append(itemCard);
  //   itemCard.append(textButton);
  // }

  // Loopar
  containerTitle.innerHTML = "";
  for (const text of scene.titleText) {
    const titleElement = document.createElement("h1");
    titleElement.textContent = text.text;
    container.append(containerTitle);
    containerTitle.append(titleElement);
  }
  console.log(scenes);

  containerStoryText.innerHTML = "";
  for (const storyText of scene.storyText) {
    const storyTextElement = document.createElement("p");
    storyTextElement.textContent = storyText.text;
    container.append(containerStoryText);
    containerStoryText.append(storyTextElement);
  }

  containerVideo.innerHTML = "";
  for (const video of scene.videos) {
    const videoElement = document.createElement("video");
    videoElement.src = video.video;
    videoElement.controls = true;
    containerStoryText.append(containerVideo);
    containerVideo.append(videoElement);
  }

  containerButton.innerHTML = "";
  for (const buttonText of scene.buttons) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonText.text;
    buttonElement.onclick = function () {
      goToNextScene(buttonText.nextSceneIndex);
    };
    container.append(containerButton);
    containerButton.append(buttonElement);
  }

  main.append(container);

  function goToNextScene(sceneIndex) {
    const container = document.querySelector(".container");
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    activeSceneIndex = sceneIndex;
    showScene();
  }
  renderItemList();
}

function renderItemList() {
  const scene = scenes[activeSceneIndex];
  const container = document.querySelector(".container");

  for (const item of scene.itemsList) {
    const itemCard = createItemCard(item);
    container.append(itemCard);
  }
}

function createItemCard(item) {
  const main = document.querySelector("main");
  const itemCard = document.createElement("div");
  itemCard.className = "itemCard";
  console.log(itemCard);
  // Skapard card title
  const title = document.createElement("h2");
  title.textContent = item.item;
  title.className = "cardTitle";

  // Create a buy button
  const textButton = document.createElement("button");
  textButton.className = "cardAddButton";
  textButton.textContent = item.text;

  main.append(itemCard);
  itemCard.append(title);
  itemCard.append(textButton);

  // create/get vill du oftast returna
  return itemCard;
}
