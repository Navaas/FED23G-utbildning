let activeSceneIndex = 0;
const scenes = [
  {
    text: "Du befinner dig i skolan. Vad vill du göra?",
    button1: {
      text: "Hoppa",
      nextSceneIndex: 1,
    },
    button2: {
      text: "Gå till lektionen",
      nextSceneIndex: 2,
    },
  },
  {
    background: "blue",
    text: "Oj, golvet gick sönder du står i källaren",
    button1: {
      text: "Ta trapporna",
      nextSceneIndex: 0,
    },
    button2: {
      text: "Ta hissen",
      nextSceneIndex: 2,
    },
  },
];
