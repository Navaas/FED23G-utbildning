const hamburgerMenu = document.querySelector(".menu");

function toggleMenu() {
  if (hamburgerMenu.style.display === "none") {
    hamburgerMenu.style.display = "block";
  } else {
    hamburgerMenu.style.display = "none";
  }
}

// Navbar syns inte efter man gått till mobile
// Man måste klicka två gånger på iconen för att den ska synas
