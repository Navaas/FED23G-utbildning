let activeSceneIndex = 0;

const scenes = [
  {
    text: "Hämta Bärgan och se vilka äventyr han har planerat idag. Glöm inte att tanka alinol.",
    buttons: [
      {
        text: "Tanka",
        nextSceneIndex: 1,
      },
      {
        text: "Hämta Bärgan",
        nextSceneIndex: 2,
      },
    ],
  },
  {
    text: "Du tankar nu alion",
    buttons: [
      {
        text: "Tillbaka",
        nextSceneIndex: 0,
      },
      {
        text: "Hämta Bärgan",
        nextSceneIndex: 2,
      },
    ],
  },
  {
    text: "Hej Bärgan! Jag är redo för dagens äventyr. Jag kan inte vänta! Är du full tankad? Kom igen, stå inte här och rosta, nu kör vi, lets go!",
    buttons: [
      {
        text: "Glömt tanka?",
        nextSceneIndex: 1,
      },
      {
        text: "Ut på äventyr",
        nextSceneIndex: 3,
      },
    ],
  },
  {
    text: "Blixten: Bärgan vad gör vi här mitt ute på åkern? Det står bara gamla trötta traktorer här. Bärgan: Vi ska leka kurragömma, räkna till 20. Tuta så högt du bara kan när du räknat klart. Men AKTA dig för Terry! Lycka till. ",
    buttons: [
      {
        text: "Vågar du inte? Åk hem.",
        nextSceneIndex: 4,
      },
      {
        text: "Tuta!",
        nextSceneIndex: 5,
      },
    ],
  },
  {
    text: "Blixten: Bärgan jag tror mitt ena däck saknar en bult. Bärgan: Är du feg eller? Blixten: Uff, nä har du inget annat äventyr? Bärgan: Jo, häng med här. Bärgan krokar fast blixten, nu kommer han inte undan.",
    buttons: [
      {
        text: "Åk till åkern ändå",
        nextSceneIndex: 3,
      },
      {
        text: "Nytt äventyr",
        nextSceneIndex: 6,
      },
    ],
  },
  {
    text: "När Blixten tutade allt vad han hade så välte alla traktorer. Sen kom Terry och jagade både Blixten och Bärgan till andra sidan åkern. Bärgan: Visst var det roligt? Blixten: *Flämt* Du lurade mig, titta nu har jag oljat på mig. Bärgan: Jag visste att du var lite klen, men jag har en annan överraskning. Kom här!",
    buttons: [
      {
        text: "Till åkern igen?",
        nextSceneIndex: 3,
      },
      {
        text: "Nytt äventyr",
        nextSceneIndex: 6,
      },
    ],
  },
  {
    text: "Bärgan tar med Blixten till sin verkstad sedan försvinner han helt plötsligt. Sen kommer han tillbaka med hela flaket fullt med popcorn. Bärgan: Titta på mig jag har blivit en pop-car. Nu tittar vi på bio. Sen har jag en sista överraskning.",
    buttonArray: "Titta i verkstaden",
    buttons: [
      {
        text: "Vad är det för överraskning?",
        nextSceneIndex: 7,
      },
    ],
  },
  {
    text: "När filmen är slut tar Bärgan med Blixten upp till Restaurangen ****. Där är fröken Sally vid ett bord. Bärgan: Ikväll är jag er kypare, vad önskas? Blixten: Bärgan har du fixat allt detta? Bärgan: Så sant som det är sagt, med lite hjälp av fröken Sally. Sally: Han är bra den där Bärgan. Blixten: Ja, han är min bästa vän!",
    buttons: [
      {
        text: "Spela igen",
        nextSceneIndex: 0,
      },
    ],
  },
];

// Kolla så alla scener kommer ut. (Det gör dom)
// console.log(scenes);
