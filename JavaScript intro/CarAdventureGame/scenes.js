let activeSceneIndex = 0;

const scenes = [
  // Scen 1
  {
    titleText: [
      {
        image: "./images/titel.png",
      },
    ],
    images: [
      {
        image: "./images/b&b.jpg",
      },
    ],
    storyText: [
      {
        text: "Välkommen till Kylarköping! ",
      },

      {
        text: "Blixten är hemma igen efter en lång resa i Tokyo. Bärgarn har saknat sin bästa vän, därför har han planerat en fartfylld dag. Häng med! ",
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
  // Scen 2
  {
    titleText: [],
    images: [
      {
        image: "./images/Bargarn1.jpg",
      },
    ],
    storyText: [
      {
        text: "Bra att du tankar, man vet aldrig vad Bärgar har för fuffens bakom backspeglarna. Åk till Bärgarns verkstad och se om han är vaken.",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Åk till Bärgarn",
        nextSceneIndex: 2,
      },
    ],
    itemsList: [],
  },
  // Scen 3
  {
    titleText: [],
    images: [
      {
        image: "./images/cars1.jpg",
      },
    ],
    storyText: [
      {
        text: "- Hallå Bärgarn!",
      },
      {
        text: "- Jag är redo för dagens äventyr, jag har tanken full med Allinol. Stå inte där och rosta, nu kör vi, lets go!",
      },
      {
        text: "- Så sant som det är sagt. Men håll utkik efter vackra blommor på vägen.",
      },
      {
        text: "- Men Bärgarn vad ska jag ha blommor till?",
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
  // Scen 4
  {
    titleText: [],
    images: [
      {
        image: "./images/tippingTractor.jpg",
      },
    ],
    storyText: [
      {
        text: "Bärgarn släpar med sig Blixten till en ödslig åker mitt ute i ingenstans. Blixten tittar sig omkring och ser bara rostiga traktorer som gäspar.",
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
  // Scen 5
  {
    titleText: [],
    images: [
      {
        image: "./images/cars4.jpg",
      },
    ],
    storyText: [
      {
        text: "Blixten ser lite fundersam ut och illa till mods. Han tycker ändå att traktorerna ser lite läskiga ut.",
      },
      {
        text: "- Bärgarn, jag tror att Luigi och Guido glömde en hjulbult till mitt däckt. Jag måste nog lösa det innan vi åker vidare.",
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
        text: "Bärgarn krokar fast Blixten i sin vinsch krok. Blixten blir lite illamående där han hänger, vad har Bärgan nu i kikaren?",
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
  // Scen 6
  {
    titleText: [],
    images: [
      {
        image: "./images/tractors.jpg",
      },
    ],
    storyText: [
      {
        text: "Blixten och Bärgarn åker tillbaka till åkern och leker kurragömma.",
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
  // Scen 7
  {
    titleText: [],
    images: [
      {
        image: "./images/terry.jpg",
      },
    ],
    storyText: [
      {
        text: "TTUUUUUUUUUT, Blixten tutade så högt att alla traktorerna välte omkull. Han tittar sig omkring och försöker hitta Bärgarn. Plötsligt hör han att det prasslar i buskarna.",
      },
      {
        text: "- Haha, hittad! Kunde du inte hittat ett bättre gämställe?",
      },
      {
        text: "Plötsligt dyker det upp en stor skördetröska som är rasande att Blixten tutade och väckte honom. Blixten åker därifrån med Terry tätt i hasorna. Mitt i rusningen dyker Bärgarn upp från ingenstans.",
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
  // Scen 8
  {
    titleText: [],
    images: [
      {
        image: "./images/garage.png",
      },
    ],
    storyText: [
      {
        text: "Trötta efter Bärgarns bravader så återvänder dom till Bärgarns verkstad för att vila lite. Bärgarn försvinner för att hjälpa Rödis att ställa upp Sten som har vält igen.",
      },
      {
        text: "- Just det Bärgarn sa att jag skulle leta efter blommor. Han kanske har något bakom verkstaden.",
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
  // Scen 9
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
        text: "Längst in, hittar Blixten en hemlig dörr. Han kör in och hittar till sin förvåning ett växhus fullt med solrosor. Han plockar upp en blomma och tar med den.",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Vänta på Bärgarn",
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
        image: "./images/flower.png",
        item: "Solros",
        text: "Hämta",
      },
      {
        image: "./images/motorolja.png",
        item: "Motorolja",
        text: "Hämta",
      },
    ],
  },
  // Scen 10
  {
    titleText: [],
    images: [],
    storyText: [
      {
        text: "Tut tut, Bärgarn kommer tillbaka med hela flaket fullt med popcorn.",
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
        text: "- Ja, jag hittade en i ditt växthus. Hoppas det är okej att jag tog en. Sen nör började du odla solrosor?",
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
  // Scen 11
  {
    titleText: [],
    images: [
      {
        image: "./images/end.jpg",
      },
    ],
    storyText: [
      {
        text: "Blixten och Bärgarn åker till Flat's 8 Café, där står Sally vid ett bord och väntar.",
      },
      {
        text: "- Ikväll är jag er kypare, vad önskar ni beställa säger Bärgan.",
      },
      {
        text: "- Har du fixat allt det här? Jag förstår varför jag skulle ta med mig en blomma säger Blixten och ger den till Sally.",
      },
      {
        text: "- Jajemän, med lite hjälp av fröken Sally säger Bärgarn.",
      },
      {
        text: "- Han är bra den där Bärgarn, eller hur? Säger Sally.",
      },
      {
        text: "- Ja, han är min bästa vän!",
      },
    ],
    videos: [],
    buttons: [],
    itemsList: [],
  },
];
