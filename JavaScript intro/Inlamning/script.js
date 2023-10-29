function lightMode() {
  document.body.classList.toggle("lightMode");
}

// Funktioner till badrummet
function stuffToBathroom() {
  // Här hämtas varje input in från html:en
  const inputOne = document.getElementById("inputOne").value;
  const inputTwo = document.getElementById("inputTwo").value;
  const inputThree = document.getElementById("inputThree").value;
  // Här sparas det användaren skriver in i varje input i varsinn variabel
  const saveFromInputOne = inputOne;
  const saveFromInputTwo = inputTwo;
  const saveFromInputThree = inputThree;
  // Här hämtas h3 in, där det sparade svaret ska skrivas ut i html
  const stuffOne = document.getElementById("stuffOne");
  const stuffTwo = document.getElementById("stuffTwo");
  const stuffThree = document.getElementById("stuffThree");
  // Här skrivs den sparade datan ut och syns i en h3 i html
  stuffOne.innerText = saveFromInputOne;
  stuffTwo.innerText = saveFromInputTwo;
  stuffThree.innerText = saveFromInputThree;
  // Detta syns i consolen, den datan användaren skrivit i input fälten
  console.log(saveFromInputOne, saveFromInputTwo, saveFromInputThree);
  //const staffOne = prompt("Skriv en sak");
  //const staffTwo = prompt("Skriv en till sak");
  //const staffThree = prompt("Skriv en till sak");
  //const addStuffOne = document.getElementById("addStuffOne");
  //const addStuffTwo = document.getElementById("addStuffTwo");
  //const addStuffThree = document.getElementById("addStuffThree");

  //console.log(staffOne, staffTwo, staffThree);
  //alert(staffOne, staffTwo, staffThree);
  //addStuffOne.innerText = staffOne;
  //addStuffTwo.innerText = staffTwo;
  //addStuffThree.innerText = staffThree;
}

function bathroom() {
  const stuffs = ["Tvål", "Tandborste", "Schampo", "Balsam", "Hudlotion"];
  for (const stuff of stuffs) {
    console.log(stuff);
    const h4 = document.createElement("h4");

    h4.innerText = stuff;
    document.body.appendChild(h4);
  }
}

function search() {
  const takeStuff = document.getElementById("takeStuffFrom").value;
  const saveFromTakeStuff = takeStuff;
  takeStuff.innerText = saveFromTakeStuff;
  const stuffs = ["Tvål", "Tandborste", "Schampo", "Balsam", "Hudlotion"];
  //const make = prompt("Hämta en sak");
  const makeIndex = stuffs.indexOf(takeStuff);
  const h4 = document.createElement("h4");

  //Gå igenom listan
  for (const stuff of stuffs) {
    if (stuff === takeStuff) {
      console.log(stuff + " finns i ditt badrumsskåp");
      stuffs.splice(makeIndex, 1); // splice gör att den tar bprt objekt i arrayen
    }
  }
  console.log(takeStuff + " finns inte i ditt badrumsskåp");
  console.log(stuffs);
  h4.innerText = stuffs;
  document.body.appendChild(h4);
}
