function clickedButton() {
  const text = prompt("Skriv något här..");
  const text1 = prompt("Skriv något här..");
  const text2 = prompt("Skriv något här..");
  const text3 = prompt("Skriv något här..");
  const text4 = prompt("Skriv något här..");
  console.log(text, text1, text2, text3, text4);
}

clickedButton();

function calculate() {
  const num1 = Number(prompt("Välj ett nummer"));
  const operator = prompt("Välj + - * /");
  const num2 = Number(prompt("Välj ett nummer"));
  console.log(num1, operator, num2);

  let result; // Här används let för att det är olika resultat

  // I denna if else så kollar den vilken operator + - * / som används som användaren har använt.
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    console.log("Skriv in en korrekt operator");
  }
  if (result) {
    alert(result); // Resultatet kommer ut i en alert ruta
    console.log(result);
  }
}

// En funktion som togglar till light and dark mode med hjälp av en knapp.
function toggleDarkMode() {
  //Exempel 1
  if (
    document.body.style.backgroundColor === "white" || // Om bakgrundsfärgen är vit, toggla den till svart.
    document.body.style.backgroundColor === ""
  ) {
    (document.body.style.backgroundColor = "black"),
      (document.body.style.color = "white"); // om bakgrundsfärgen är svart, toggla den till vit
  } else {
    (document.body.style.backgroundColor = "white"),
      (document.body.style.color = "black");
  }
  //Exempel 2
  //document.body.classList.toggle("dark-mode"); // Här tar du ut en class som ligger på elementet som har en css class istället.
}
