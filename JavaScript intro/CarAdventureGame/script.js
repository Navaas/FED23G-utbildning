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
  main.innerHTML = "";

  const container = document.createElement("div");
  container.className = "container";

  const containerInner = document.createElement("div");
  containerInner.className = "containerInner";

  const containerContent = document.createElement("div");
  containerContent.className = "containerContent";

  const containerText = document.createElement("div");
  containerText.className = "containerText";

  const containerImage = document.createElement("div");
  containerImage.className = "containerImage";

  const containerButton = document.createElement("div");
  containerButton.className = "containerButton";

  const containerVideo = document.createElement("div");
  containerVideo.className = "containerVideo";

  const itemCard = document.createElement("div");
  itemCard.className = "itemCard";

  const containerCard = document.createElement("div");
  containerCard.className = "containerCard";

  // Loopar
  containerContent.innerHTML = "";
  for (const text of scene.titleText) {
    const titleElement = document.createElement("h1");
    titleElement.textContent = text.text;
    container.append(titleElement);
  }

  containerImage.innerHTML = "";
  for (const image of scene.images) {
    const imageStory = document.createElement("img");
    imageStory.src = image.image;
    imageStory.classList = "imageStartSide";
    containerContent.append(containerImage);
    containerImage.append(imageStory);
  }

  containerText.innerHTML = "";
  for (const storyText of scene.storyText) {
    const storyTextElement = document.createElement("p");
    storyTextElement.textContent = storyText.text;
    containerText.append(storyTextElement);
  }

  containerVideo.innerHTML = "";
  for (const video of scene.videos) {
    const videoElement = document.createElement("video");
    videoElement.src = video.video;
    videoElement.controls = true;
    containerContent.append(containerVideo);
    containerVideo.append(videoElement);
  }

  containerButton.innerHTML = "";
  for (const buttonText of scene.buttons) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonText.text;
    buttonElement.className = "button";
    buttonElement.onclick = function () {
      goToNextScene(buttonText.nextSceneIndex);
    };
    containerInner.append(containerButton);
    containerButton.append(buttonElement);
  }

  main.append(container);
  container.append(containerInner);
  containerInner.append(containerContent);
  containerContent.append(containerText);
  containerInner.append(containerCard);
  containerText.append(containerVideo);

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
  const containerCard = document.querySelector(".containerCard");

  for (const item of scene.itemsList) {
    const card = createItemCard(item);
    // container.append(item);
    containerCard.append(card);
  }
}

function createItemCard(item) {
  const containerInner = document.querySelector(".containerInner");

  const card = document.createElement("div");
  card.className = "card";
  console.log(card);

  // Skapard card title
  const title = document.createElement("h2");
  title.textContent = item.item;
  title.className = "cardTitle";

  // Create a buy button
  const textButton = document.createElement("button");
  textButton.className = "buttonCard";
  textButton.textContent = item.text;
  textButton.onclick = function () {
    savedItemsList.push(item);
    saveItemToLocalStorage();
    renderItemListCountBadge();
    const scene = scenes[activeSceneIndex];
    itemsList = [];

    scene.itemsList = scene.itemsList.filter(
      (pickUpItem) => pickUpItem.item !== item.item
    );
    showScene();
  };

  // Skapa en bild
  const cardImages = document.createElement("img");
  cardImages.className = "cardImages";
  cardImages.src = item.image;

  containerInner.append(card);
  card.append(cardImages);
  card.append(title);
  card.append(textButton);

  // create/get vill du oftast returna
  return card;
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
