import { useEffect, useState } from "react";

interface Day {
  datum: string;
  helgdag: string;
}

function App() {
  const [holidays, setHolidays] = useState<Day[]>([]);

  // Att hämta ifformationen från ett API är en sidoeffekt

  useEffect(() => {
    // Hämta helgdagar
    async function getSwedishHolidays() {
      const response = await fetch(
        "https://sholiday.faboul.se/dagar/v2.1/2024"
      );
      const data = await response.json();
      const holidays = data.dagar.filter((d) => d.helgdag);
      setHolidays(holidays);
    }

    getSwedishHolidays();
  }, []);

  return (
    <>
      <h1>FETCH</h1>
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.datum}>
            {holiday.helgdag} - {holiday.datum}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
