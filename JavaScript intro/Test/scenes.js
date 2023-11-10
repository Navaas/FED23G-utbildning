let activeSceneIndex = 0;

const scenes = [
  {
    titleText: [
      {
        // text: "Blixten och Bärgan på äventyr",
      },
    ],
    images: [
      {
        image: "./images/bargarn.jpg",
      },
    ],
    storyText: [
      {
        text: "Välkommen till Kylarköping! ",
      },
      {
        text: "Blixten är hemma igen efter en lång resa i Tokyo. Bärgan har saknat sin bästa vän, därför har han planerat en fartfylld dag. ",
      },
      {
        text: "Är du redo för?",
      },
      {
        text: "Fyll tanken, du kör vi!",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Börja spela",
        nextSceneIndex: 1,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Bra att du tankar, man vet aldrig vad Bärgar har för fuffens bakom backspeglarna. Åk till Bärgans verkstad och se om han är vaken.",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Åk till Bärgan",
        nextSceneIndex: 2,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "- Hallå Bärgan!",
      },
      {
        text: "- Jag är redo för dagens äventyr, jag har tanken full med Allinol. Stå inte där och rosta, nu kör vi, lets go!",
      },
      {
        text: "- Så sant som det är sagt. Men håll utkik efter vackra blommor på vägen.",
      },
      {
        text: "- Men Bärgan vad ska jag ha blommor till?",
      },
      {
        text: "- Det är en hemlis, men kom så åker vi.",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Till åkern",
        nextSceneIndex: 3,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Bärgan släpar med sig Blixten till en ödslig åker mitt ute i ingenstans. Blixten tittar sig omkring och ser bara rostiga traktorer som gäspar.",
      },
      {
        text: "- Men vad är det här för roligt? Det är bara sömniga traktorer här.",
      },
      {
        text: "- Vi ska leka min favoritlek, kurragörra. Du får börjar räkna. Tuta så högt du kan när du räknat klart. Och just det glöm inte att AKTA dig för Terry! Lycka till att hitta mig.",
      },
      {
        text: "- 1, 2, 3, 4, 5......... 20",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Vågar du inte tuta?",
        nextSceneIndex: 4,
      },
      {
        text: "Tuta!",
        nextSceneIndex: 6,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Blixten ser lite fundersam ut och illa till mods. Han tycker ändå att traktorerna ser lite läskiga ut.",
      },
      {
        text: "- Bärgan, jag tror att Luigi och Guido glömde en hjulbult till mitt däckt. Jag måste nog lösa det innan vi åker vidare.",
      },
      {
        text: "- Uff, är den store Blixten McQueen feg?",
      },
      {
        text: "- Ha ha, kul. Jag känner inte för att leka kurragömma. Har du inget annat roligt planerat?",
      },
      {
        text: "- Joho, massa kul! Häng med här.",
      },
      {
        text: "Bärgan krokar fast Blixten i sin vinsch krok. Blixten blir lite illamående där han hänger, vad har Bärgan nu i kikaren?",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Tillbaka till åkern",
        nextSceneIndex: 5,
      },
      {
        text: "Hoppa till nästa äventyr",
        nextSceneIndex: 7,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Blixten och Bärgan åker tillbaka till åkern och leker kurragömma.",
      },
      {
        text: "- Är du redo, jag åker och gömmer mig. Lycka till att hitta mig.",
      },
      {
        text: "- Du har inte en chans, och Terry är jag inte skraj för. 1, 2, 3 4, 5, ....20",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Tuta",
        nextSceneIndex: 6,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "TTUUUUUUUUUT, Blixten tutade så högt att alla traktorerna välte omkull. Han tittar sig omkring och försöker hitta Bärgan. Plötsligt hör han att det prasslar i buskarna.",
      },
      {
        text: "- Haha, hittad! Kunde du inte hittat ett bättre gämställe?",
      },
      {
        text: "Plötsligt dyker det upp en stor bulldoser som är rasande att Blixten tutade och väckte honom. Blixten åker därifrån med Terry tätt i hasorna. Mitt i rusningen dyker Bärgan upp från ingenstans.",
      },
      {
        text: "- Visst var det roligt, den var du inte med på. Kom vi tar en genväg vid snåret där borta. Vi har inte tid att leka mer med Terry.",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Nästa äventyr",
        nextSceneIndex: 7,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Trötta efter Bärgans bravader så återvänder dom till Bärgans verkstad för att vila lite. Bärgan försvinner för att hjälpa Rödis att ställa upp Sten som har vält igen.",
      },
      {
        text: "- Just det Bärgan sa att jag skulle leta efter blommor. Han kanske har något bakom verkstaden.",
      },
      {
        text: "Blixten kör runt hörnet men hittar inga blommor. Men så ser han att dörren till verkstaden står på glänt. Finns det något roligt där inne?",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Titta i verkstaden",
        nextSceneIndex: 8,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Blixten titta sig omkring och blåser bort lite damm från arbetsbänken.",
      },
      {
        text: "- Vilken röra det är här inne. Hur hittar han alla sina prylar?",
      },
      {
        text: "Längst in, hittar Blixten en hemlig dörr. Han kör in och hittar till sin förvåning ett växhus fullt med orkideér. Han plockar upp en blomma och tar med den ut.",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Vänta på Bärgan",
        nextSceneIndex: 9,
      },
    ],
    itemsList: [
      {
        image: "./images/skiftnyckel.png",
        item: "Skruvmejsel",
        text: "Hämta",
      },
      {
        image: "./images/skiftnyckel.png",
        item: "Motorolja",
        text: "Hämta",
      },
      {
        image: "./images/skiftnyckel.png",
        item: "Blomma",
        text: "Hämta",
      },
    ],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Tut tut, Bärgan kommer tillbaka med hela flaket fullt med popcorn.",
      },
      {
        text: "- Titta på mig jag har blivit en pop-car. Jag har fixat bio på min bakgård. Följ med.",
      },
      {
        text: "Vilken härlig film Bärgan har fixat och popcornen är perfekt saltade. Denna dag kan inte bli bättre tänker Blixten förnöjt.",
      },
      {
        text: "- Hittade du en blomma som jag bad dig?",
      },
      {
        text: "- Ja, jag hittade en i ditt växthus. Hoppas det är okej att jag tog en där. Sen nör började du odla orkideér?",
      },
      {
        text: "- Jag måste ju göra något när min bästa vän åker jorden runt för att bli världens snabbaste racerbil. Kom nu, jag har en sista överraskning.",
      },
    ],
    videos: [
      {
        video: "movie.mov",
      },
    ],
    buttons: [
      {
        text: "Vad är det för överraskning?",
        nextSceneIndex: 10,
      },
    ],
    itemsList: [],
  },
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Blixten och Bärgan åker till Flat's 8 Café, där står Sally vid ett bord och väntar på dom.",
      },
      {
        text: "- Ikväll är jag er kypare, vad önskar ni beställa säger Bärgan.",
      },
      {
        text: "- Har du fixat allt det här? Jag förstår varför jag skulle ta med mig en blomma.",
      },
      {
        text: "- Jajemän, med lite hjälp av fröken Sally.",
      },
      {
        text: "- Han är bra den där Bärgan, eller hur?",
      },
      {
        text: "- Ja, han är min bästa vän!",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Spela igen?",
        nextSceneIndex: 0,
      },
    ],
    itemsList: [],
  },
];
