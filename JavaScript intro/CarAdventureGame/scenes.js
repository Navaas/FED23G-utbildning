let activeSceneIndex = 0;

const scenes = [
  {
    titleText: [
      {
        text: "Blixten och Bärgan på äventyr",
      },
    ],
    storyText: [
      {
        text: "Välkommen till Kylarköping! Blixten är hemma igen efter en lång resa i Tokyo. Bärgan har planerat spännande saker för sin vän.",
      },
      {
        text: "Är du redo för?",
      },
      {
        text: "Let's go, nu gör vi!",
      },
    ],
    buttons: [
      {
        text: "Börja spela",
        nextSceneIndex: 1,
      },
    ],
  },
  {
    storyText: [
      {
        text: "Det är nog bäst att åka och tanka först. Man vet aldrig vad Bärgan har för fuffens för sig bakom backspeglarna",
      },
    ],
    buttons: [
      {
        text: "Åk och tanka",
        nextSceneIndex: 2,
      },
    ],
  },
];

console.log(scenes);