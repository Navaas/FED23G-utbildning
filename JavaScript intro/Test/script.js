window.addEventListener("DOMContentLoaded", main);

let savedItemsList = [];

function main() {
  showScen();
  loadItemListFromLocalStorage();
}

function showScen() {
  const scene = scenes[activeSceneIndex];
  const main = document.querySelector("main");

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

  // Loopar
  // Titel
  containerContent.innerHTML = "";
  for (const text of scene.titleText) {
    const titleElement = document.createElement("h1");
    titleElement.textContent = text.text;
    titleElement.className = "titleElement";
    containerInner.append(titleElement);
  }
  // Story text
  containerText.innerHTML = "";
  for (const storyText of scene.storyText) {
    const storyTextElement = document.createElement("p");
    storyTextElement.textContent = storyText.text;
    containerText.append(storyTextElement);
  }
  // Image
  containerImage.innerHTML = "";
  for (const image of scene.images) {
    const imageStory = document.createElement("img");
    imageStory.src = image.image;
    imageStory.classList = "imageStartSide";
    containerContent.append(containerImage);
    containerImage.append(imageStory);
  }
  // Knappar
  containerButton.innerHTML = "";
  for (const buttonText of scene.buttons) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonText.text;
    buttonElement.onclick = function () {
      goToNextScene(buttonText.nextSceneIndex);
    };
    containerInner.append(containerButton);
    containerButton.append(buttonElement);
  }
  // Video
  containerVideo.innerHTML = "";
  for (const video of scene.videos) {
    const videoElement = document.createElement("video");
    videoElement.src = video.video;
    videoElement.controls = true;
    containerContent.append(containerVideo);
    containerVideo.append(videoElement);
  }

  main.append(container);
  container.append(containerInner);
  containerInner.append(containerContent);
  containerContent.append(containerText);

  function goToNextScene(sceneIndex) {
    const container = document.querySelector(".container");
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    activeSceneIndex = sceneIndex;
    showScen();
  }
  //   renderItemList();
}

console.log(scenes);

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
