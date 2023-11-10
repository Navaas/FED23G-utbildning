window.addEventListener("DOMContentLoaded", main);

let savedItemsList = [];

function main() {
  showScene();
  loadItemListFromLocalStorage();
  // renderItemListCountBadge();
}

function showScene() {
  const scene = scenes[activeSceneIndex];
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.className = "container";

  const containerTitle = document.createElement("div");
  containerTitle.className = "containerTitle";

  const innerContainer = document.createElement("div");
  innerContainer.className = "innerContainer";

  const imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";

  const containerStoryText = document.createElement("div");
  containerStoryText.className = "containerStoryText";

  const containerButton = document.createElement("div");
  containerButton.className = "containerButton";

  const containerVideo = document.createElement("div");
  containerVideo.className = "containerVideo";

  const itemCard = document.createElement("div");
  itemCard.className = "itemCard";

  // Loopar
  containerTitle.innerHTML = "";
  for (const text of scene.titleText) {
    const titleElement = document.createElement("h1");
    titleElement.textContent = text.text;
    container.append(containerTitle);
    containerTitle.append(titleElement);
  }

  imageContainer.innerHTML = "";
  for (const image of scene.images) {
    const imageStory = document.createElement("img");
    imageStory.src = image.image;
    imageStory.classList = "imageStartSide";
    innerContainer.append(imageStory);
  }

  containerStoryText.innerHTML = "";
  for (const storyText of scene.storyText) {
    const storyTextElement = document.createElement("p");
    storyTextElement.textContent = storyText.text;
    container.append(containerStoryText);
    containerStoryText.append(innerContainer);
    innerContainer.append(storyTextElement);
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
    containerButton.append(containerStoryText);
    containerStoryText.appendChild(buttonElement);
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
  const containerStoryText = document.querySelector(".containerStoryText");
  for (const item of scene.itemsList) {
    const itemCard = createItemCard(item);
    container.append(containerStoryText);
    containerStoryText.append(itemCard);
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
  textButton.onclick = function () {
    savedItemsList.push(item);
    saveItemToLocalStorage();
    renderItemListCountBadge();
  };

  // Skapa en bild
  const image = document.createElement("img");
  image.src = item.image;
  image.classList = "image";

  main.append(itemCard);

  itemCard.append(image);
  itemCard.append(title);
  itemCard.append(textButton);

  // create/get vill du oftast returna
  return itemCard;
}

function saveItemToLocalStorage() {
  const saveItems = JSON.stringify(savedItemsList);
  localStorage.setItem("savedItemsList", saveItems);
}

function loadItemListFromLocalStorage() {
  if (localStorage.key("savedItemsList")) {
    const saveItems = localStorage.getItem("savedItemsList");
    savedItemsList = JSON.parse(saveItems);
  }
}

function renderItemListCountBadge() {
  const main = document.querySelector("main");
  const span = document.createElement("span");
  // span.textContent = savedItemsList.length;
  span.textContent = savedItemsList.length;
  main.append(span);
}
