import "./style.css";

window.addEventListener("DOMContentLoaded", main);

function main() {
  const button = document.querySelector("button");
  button?.addEventListener(
    "click",
    randomizeBackgroundColor
  ); /* ? = är en inbyggd if-sats*/

  const fullName = getFullName("My", "Mysansson");
  console.log(fullName);
}

/* Denna funktionen sätter en random färg när du trycker på knappen*/
function randomizeBackgroundColor() {
  const red = Math.floor(Math.random() * 256); /* Math.floor avrundar neråt*/
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
}

/* Här kommer den första Typescripten i denna filen*/
function getFullName(firstName: string, lastName: string) {
  // return firstName + "" + lastName; /* Denna och raden under gör samma sak*/
  return `${firstName} ${lastName}`;
}
