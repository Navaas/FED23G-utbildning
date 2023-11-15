window.addEventListener("DOMContentLoaded", main);

let currentImageIndex = 0;

function main() {
  beginSlideshow();
}

function beginSlideshow() {
  setInterval(showNextImage, 2000);
}

function showNextImage() {
  // Hämta alla bilder från DOM:en
  const images = document.querySelectorAll(".slideshowContainer img");
  // Dölj bilden som är synlig just nu
  const visibleImage = images[currentImageIndex];
  visibleImage.classList.remove("show");
  // Sätt nästa bild index som ska visas
  currentImageIndex += 1;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  // Visa bilden som är dold just nu
  const hiddenImage = images[currentImageIndex];
  hiddenImage.classList.add("show");
  console.log(visibleImage);
}
