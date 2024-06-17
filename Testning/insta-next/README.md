# Holiday Photo

Detta är en skoluppgift som kommer vara en fullstack applikation men med fokus på E2E-tester med Cypress. Det innehåller en frontend, backend och en databas, i detta fall med Prisma. Applikationen är en light version av en fotobook där man kan lägga till nya post som innehåller en titel, bild och beskrivning, samt att man sk kunna ta bort en post och posten sparas i en databas.

## Användarflödet

Användaren kommer till startsidan där det finns en Lägga till knapp (+) och navigeras vidare till en ny sida. På den nya sidan preenteras ett formulär som användaren kan fylla i. När användarn fyllt i formuläret att klickat på Spara knappen navigeras användaren tillbaka till startsidan där den kan se den nya posten.

Användaren kan också välja att ta bort en post. På varje postkort syns en Papperskorg icon. Klickar användaren på Papperskorg-iconen kommer posten att raderas och användaren kommer se direkt när en post har tagits bort.

Användaren kommer till startsidan där finns en Lägga till knapp (+) och navigeras vidare till en ny sida. Där presenteras ett formulär som användaren kan fylla i. Om användaren ångrar sig kan användaren klicka på Hem-iconen höst upp till väster för att komma tillbaka till startsidan.

## Installation

Börja med att installera alla paket med `npm install`.

## Starta applikationen

- Sen behöver vi skapa databasen med `npm run push`
- Sist så behöver vi seeda lite innehåll med `npm run seed`
- För att starta applikationen kan du kalla på `npm run dev`

## Testning / Cypress

- Skapa testdatabasen genom att köra `npm run test:push.`
- Därefter är det bara att starta testmiljön med `npm run test`
- Köra dev servern parallelt med testen `npm run cy:dev`
- Starta prisma studio `npm run studio`
