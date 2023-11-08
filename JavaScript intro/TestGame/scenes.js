let activeSceneIndex = 0;

const scenes = [
  {
    text: "Hämta Bärgan och se vilka äventyr han har planerat idag. Glöm inte att tanka alinol.",
    button1: {
      text: "Tanka",
      nextSceneIndex: 1,
    },
    button2: {
      text: "Hämta Bärgan",
      nextSceneIndex: 2,
    },
    backgroundImage: "url(./images/cars3.jpg)",
  },
  {
    text: "Du tankar nu alinol",
    button1: {
      text: "Tillbaka",
      nextSceneIndex: 0,
    },
    button2: {
      text: "Till Bärgan",
      nextSceneIndex: 2,
    },
    backgroundImage: "url(./images/tanka.jpg)",
  },
  {
    text: "Hej Bärgan! Jag är redo för dagens äventyr. Jag kan inte vänta! Är du full tankad? Kom igen, stå inte här och rosta, nu kör vi, lets go!",
    button1: {
      text: "Glömt tanka?",
      nextSceneIndex: 1,
    },
    button2: {
      text: "Ut på äventyr",
      nextSceneIndex: 3,
    },
    backgroundImage: "url(./images/bargan.jpg)",
  },
  {
    text: "Blixten: Bärgan vad gör vi här mitt ute på åkern? Det står bara gamla trötta traktorer här. Bärgan: Vi ska leka kurragömma, räkna till 20. Tuta så högt du bara kan när du räknat klart. Men AKTA dig för Terry! Lycka till. ",
    button1: {
      text: "Vågar du inte? Åk hem.",
      nextSceneIndex: 4,
    },
    button2: {
      text: "Tuta",
      nextSceneIndex: 5,
    },
    backgroundImage: "url(./images/tippingTractor.jpg)",
  },
  {
    text: "Blixten: Bärgan jag tror mitt ena däck saknar en bult. Bärgan: Är du feg eller? Blixten: Uff, nä har du inget annat äventyr? Bärgan: Jo, häng med här. Bärgan krokar fast blixten, nu kommer han inte undan.",
    backgroundImage: "url(./images/bargan1.jpg)",
    button1: {
      text: "Åk till åkern igen?",
      nextSceneIndex: 3,
    },
    button2: {
      text: "Nytt äventyr",
      nextSceneIndex: 5,
    },
  },
  {
    id: 1,
    text: "Bärgan kommer tillbaka med hela flaket fullt med popcorn. Bärgan: Titta på mig jag har blivit en pop-car. Nu tittar vi på bio. Sen har jag en sista överraskning, men du måste ta med dig en blomma. Titta i verkstaden om du hittar någon.",
    video: "movie.mov",
    backgroundImage: "url(./images/cars1.jpg)",
    button1: {
      text: "Titta i garaget",
      nextSceneIndex: 6,
    },
    button2: {
      text: "Titta i verkstaden",
      nextSceneIndex: 0,
    },
  },
  {
    text: "Oj, vad mycket bråte han har. Kan du hitta en blomma? ",
    backgroundImage: "url(./images/cars1.jpg)",
    items: [
      {
        title: "Motorolja",
      },
      {
        title: "Skiftnyckel",
      },
      {
        title: "Däck",
      },
      {
        title: "Blomma",
      },
      {
        title: "Skruvmejsel",
      },
    ],
    button1: {
      text: "Till överraskningen",
      nextSceneIndex: 7,
    },
    button2: {
      text: "Titta i verkstaden",
      nextSceneIndex: 0,
    },
  },
  {
    text: "När filmen är slut tar Bärgan med Blixten upp till Restaurangen ****. Där är fröken Sally vid ett bord. Bärgan: Ikväll är jag er kypare, vad önskas? Blixten: Bärgan har du fixat allt detta? Bärgan: Så sant som det är sagt, med lite hjälp av fröken Sally. Sally: Han är bra den där Bärgan. Blixten: Ja, han är min bästa vän!",
    backgroundImage: "url(./images/sally3.jpg)",
    button1: {
      text: "Spela igen?",
      nextSceneIndex: 0,
    },
    button2: {
      text: "ta bort",
      nextSceneIndex: 0,
    },
  },
];
