window.addEventListener("DOMContentLoaded", main);

async function main() {
  const holidays = await getSwedishHolidays();
  renderHolidays(holidays);
}

function renderHolidays(holidays) {
  const ul = document.createElement("ul");
  for (const holiday of holidays) {
    const li = document.createElement("li");
    li.textContent = holiday.helgdag + " - " + holiday.datum;
    ul.append(li);
  }
  document.body.append(ul);
}

async function getSwedishHolidays() {
  const respons = await fetch("https://sholiday.faboul.se/dagar/v2.1/2024");
  const data = await respons.json();
  return data.dagar.filter((d) => d.helgdag);
}
