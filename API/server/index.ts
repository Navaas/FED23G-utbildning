/* Detta är starten på en server */
import fs from "fs/promises"; /* fs = file system */
import http from "http";

const colors = require("colors");

/* Här skapas en server */
const server = http.createServer(async (req, res) => {
  const ip = req.socket.remoteAddress; /* Hämta ut en ip-adress */
  console.log(req.method, req.url, req.headers.cookie, ip);

  //TODO
  // 1. kontrollera verbet
  // 2. Kontrollera pathname
  // 3. Kontrollera cookies för login
  // 4. Validera data

  const file = await fs.readFile("./data.json", {
    encoding: "utf8",
  }); /* Hämta en fil och skriv ut den på localhost */

  res.write(file);
  res.end();
});

/* Här talar man om vilken port servern ska ha. */
server.listen(3000, () => {
  console.log(colors.cyan("Server is running on http://localhost:3000"));
});

/* Socket är som ett eluttag. */
