let activeSceneIndex = 0;

const scenes = [
  {
    text: "Hämta Bärgan och se vilka äventyr han har planerat idag. Glöm inte att tanka alinol.",
    button1: {
      text: "Tanka alinol",
      nextSceneIndex: 1,
    },
    button2: {
      text: "Hämta Bärgan",
      nextSceneIndex: 2,
    },
  },
  {
    text: "Du tankar nu alion",
    button1: {
      text: "Tillbaka",
      nextSceneIndex: 0,
    },
    button2: {
      text: "Hämta Bärgan",
      nextSceneIndex: 2,
    },
  },
  {
    text: "Du är hos Bärgan",
    button1: {
      text: "Glömt tanka?",
      nextSceneIndex: 1,
    },
    button2: {
      text: "Ut på äventyr",
      nextSceneIndex: 2,
    },
  },
];

// Kolla så alla scener kommer ut. (Det gör dom)
// console.log(scenes);
