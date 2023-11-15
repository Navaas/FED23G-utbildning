let activeSceneIndex = 0;

/**
 * @typedef {{ titleTexts: ImageObject[], images: ImageObject[], storyTexts: ImageObject[], video: ImageObject[], buttons[], itemLists[] }} Scene
 */

/**
 * @typedef {{ image: string }} ImageObject
 */

/**
 * @type {Scene[]}
 */
const scenes = [
  // Scen 1
  {
    titleTexts: [
      {
        image: "./images/titel.png",
      },
    ],
    images: [
      {
        image: "./images/b&b.jpg",
      },
    ],
    storyTexts: [
      {
        text: "Välkommen till Kylarköping! ",
      },

      {
        text: "Blixten är hemma igen efter en lång resa i Tokyo. Bärgarn har saknat sin bästa vän, därför har han planerat en fartfylld dag. Häng med! ",
      },
      {
        text: "Är du redo för äventyr?",
      },
      {
        text: "Fyll tanken, då kör vi!",
      },
    ],
    videos: [],
    buttons: [
      {
        text: "Börja spela",
        nextSceneIndex: 1,
      },
    ],
    itemsLists: [],
  },
  // Scen 2
  {
    titleTexts: [],
    images: [
      {
        image: "./images/tanka.jpeg",
      },
    ],
    storyTexts: [
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
    itemsLists: [],
  },
  // Scen 3
  {
    titleTexts: [],
    images: [
      {
        image: "./images/cars1.jpg",
      },
    ],
    storyTexts: [
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
    itemsLists: [],
  },
  // Scen 4
  {
    titleTexts: [],
    images: [
      {
        image: "./images/tippingTractor.jpg",
      },
    ],
    storyTexts: [
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
    itemsLists: [],
  },
  // Scen 5
  {
    titleTexts: [],
    images: [
      {
        image: "./images/cars4.jpg",
      },
    ],
    storyTexts: [
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
    itemsLists: [],
  },
  // Scen 6
  {
    titleTexts: [],
    images: [
      {
        image: "./images/tractors.jpg",
      },
    ],
    storyTexts: [
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
    itemsLists: [],
  },
  // Scen 7
  {
    titleTexts: [],
    images: [
      {
        image: "./images/terry.jpg",
      },
    ],
    storyTexts: [
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
    itemsLists: [],
  },
  // Scen 8
  {
    titleTexts: [],
    images: [
      {
        image: "./images/garage.png",
      },
    ],
    storyTexts: [
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
    itemsLists: [],
  },
  // Scen 9
  {
    titleTexts: [],
    images: [],
    storyTexts: [
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
    itemsLists: [
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
    titleTexts: [],
    images: [],
    storyTexts: [
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
    itemsLists: [],
  },
  // Scen 11
  {
    titleTexts: [],
    images: [
      {
        image: "./images/end.jpg",
      },
    ],
    storyTexts: [
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
    itemsLists: [],
  },
];
