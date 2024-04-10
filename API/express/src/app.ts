// Det äldre sättet att hämta express
import express, { NextFunction, Request, Response } from "express";
// Hämta mockad data från en fil
import { products } from "./products";

// Låt app få tillgång till express
// Skapa butiken
const app = express();
const port = 3000;

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(new Date().toISOString(), req.method, req.url);
  next();
}

// Binder till en url och vad som ska hända vid den url:en.
// Tänk att det är en butik. Vad ska hända i butiken. Definiera hur butiken ska fungera
// Logger ska köras på alla. MÅSTE LIGGA FÖRST.
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json("Hej kära kund, hur kan jag hjälpa dig idag?");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  products.push(req.body);
  res.json("Produkten är tillagd");
});

// Öppna butiken/dörrarna. Vilken port ska det hända på.
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}"`);
});

// Utan att definiera porten i en variabel. Ett annat sätt att skriva.
// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000")
// })
