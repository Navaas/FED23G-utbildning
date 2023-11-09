let activeSceneIndex = 0;

const scenes = [
  {
    buttons: [
      {
        text: "Knapp 2",
        nextSceneIndex: 1,
      },
      {
        text: "Knapp 3",
        nextSceneIndex: 1,
      },
    ],
    texts: [
      {
        text: "Jag heter Michaela",
      },
      {
        text: "Jag heter Hugo",
      },
    ],
  },
  {
    text: "Hej, jag heter Michaela.",
    buttons: [
      {
        text: "Knapp 2",
        nextSceneIndex: 2,
      },
      {
        text: "Knapp 3",
        nextSceneIndex: 2,
      },
    ],
  },
  {
    text: "Hej, jag heter Filip.",
    buttons: [
      {
        text: "Knapp 4",
        nextSceneIndex: 3,
      },
      {
        text: "Knapp 5",
        nextSceneIndex: 3,
      },
    ],
  },
  {
    text: "Hej, jag heter Moa.",
    buttons: [
      {
        text: "Knapp 6",
        nextSceneIndex: 4,
      },
      {
        text: "Knapp 7",
        nextSceneIndex: 4,
      },
      {
        text: "Knapp 8",
        nextSceneIndex: 1,
      },
      {
        text: "Knapp 9",
        nextSceneIndex: 0,
      },
    ],
  },
];
