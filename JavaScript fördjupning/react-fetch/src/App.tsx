import { useEffect } from "react";

function App() {
  // Att hämta ifformationen från ett API är en sidoeffekt

  useEffect(() => {
    // Hämta helgdagar
    async function getSwedishHolidays() {
      const response = await fetch(
        "https://sholiday.faboul.se/dagar/v2.1/2024"
      );
      const data = await response.json();
      const holidays = data.dagar.filter((d) => d.helgdag);
      console.log(holidays);
    }
    getSwedishHolidays();
  }, []);

  return (
    <>
      <h1>FETCH</h1>
    </>
  );
}

export default App;
