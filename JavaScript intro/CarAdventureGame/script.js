window.addEventListener("DOMContentLoaded", main);

// Den nya arrayen som sakerna sparas i från itemlist.
let savedItemsList = [];

function main() {
  showScene();
  loadItemListFromLocalStorage();
}

/**
 * This is a function how create html element and with for loops render out the scene with the content.
 */
function showScene() {
  // Hämta in scenerna
  const scene = scenes[activeSceneIndex];

  // Här hämtas in html element from intex.html
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  // Denna tömmer dina scener
  main.innerHTML = "";

  // Här skapas alla html element
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

  // Här loopas alla arrayer med objekt från scener
  for (const image of scene.titleTexts) {
    const titleImage = document.createElement("img");
    titleImage.classList = "titleImage";
    titleImage.src = image.image;
    header.append(titleImage);
  }

  for (const image of scene.images) {
    const imageStory = document.createElement("img");
    imageStory.src = image.image;
    imageStory.classList = "imageStartSide";
    containerContent.append(containerImage);
    containerImage.append(imageStory);
  }

  for (const storyText of scene.storyTexts) {
    const storyTextElement = document.createElement("p");
    storyTextElement.textContent = storyText.text;
    containerContent.append(containerText);
    containerText.append(storyTextElement);
  }

  for (const video of scene.videos) {
    const videoElement = document.createElement("video");
    videoElement.src = video.video;
    videoElement.controls = true;
    videoElement.width = 350;
    videoElement.height = 210;
    containerContent.append(containerVideo);
    containerVideo.append(videoElement);
  }

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

  // Här skrivs det ut i dom:en
  main.append(container);
  container.append(containerInner);
  containerInner.append(containerContent);
  containerInner.append(containerCard);
  // Hör körs funktionen för arr skriva ut itemlist
  renderItemList();
}

/**
 * This function render all the scenes, when you switch scenes.
 * @param {string} sceneIndex
 */
function goToNextScene(sceneIndex) {
  const container = document.querySelector(".container");
  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }
  activeSceneIndex = sceneIndex;
  showScene();
}

/**
 * This function render the itemlist from scene with a for loop.
 */
function renderItemList() {
  const scene = scenes[activeSceneIndex];
  const containerCard = document.querySelector(".containerCard");

  for (const item of scene.itemsLists) {
    const card = createItemCard(item);
    containerCard.append(card);
  }
}

/** This function create the html and render the content from the array in scenes.js.
 * And create a new array with the stuff you pickup, a filter function.
 * @param {string} item
 */
function createItemCard(item) {
  const containerInner = document.querySelector(".containerInner");
  const card = document.createElement("div");
  card.className = "card";

  // Skapar card title
  const title = document.createElement("p");
  title.textContent = item.item;
  title.className = "cardTitle";

  // Skapas "hämta" knappen
  const textButton = document.createElement("button");
  textButton.className = "buttonCard";
  textButton.textContent = item.text;
  textButton.onclick = function () {
    savedItemsList.push(item);
    saveItemToLocalStorage();

    const scene = scenes[activeSceneIndex];
    itemsLists = [];
    // Här filtrerar array listan till en ny när du väljer saker i itemlist. Så försvinner saken du valt.
    scene.itemsLists = scene.itemsLists.filter(
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

  return card;
}

/**
 * This function save the stuff you pick up from itemlist to localStorage.
 */
function saveItemToLocalStorage() {
  const saveItems = JSON.stringify(savedItemsList);
  localStorage.setItem("savedItemsList", saveItems);
}

/**
 * Here can you see the saved stuff you pickup in localStorage
 */
function loadItemListFromLocalStorage() {
  if (localStorage.key("savedItemsList")) {
    const saveItems = localStorage.getItem("savedItemsList");
    savedItemsList = JSON.parse(saveItems);
  }
}
