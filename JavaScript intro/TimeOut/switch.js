console.log("Switch Demo");

const date = new Date();
const weekdayString = getWeekDayString(date);
console.log(weekdayString);

// Denna funktion motsvarar switchen nedanför. Men nu kan man ropa in denna funktionen varman vill
function getWeekDayString(date) {
  const weekday = date.getDay();
  switch (weekday) {
    case 1:
      return "Måndag";
    case 2:
      return "Tisdag";
    case 3:
      return "Onsdag";
    case 4:
      return "Torsdag";
    case 5:
      return "Fredag";
    case 6:
      return "Lördag";
    case 7:
      return "Söndag";
  }
}

/*switch (weekday) {
  case 1:
    console.log("Måndag");
    break;
  case 2:
    console.log("Tisdag");
    break;
  case 3:
    console.log("Onsdag");
    break;
  case 4:
    console.log("Torsdag");
    break;
  case 5:
    console.log("Fredag");
    break;
  case 6:
    console.log("Lördag");
    break;
  case 0:
    console.log("Söndag");
    break;
  default:
    console.log("Ogiltig veckodag");
    break;
}*/
