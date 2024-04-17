import argon2 from "argon2"; /* Kryptera lösenord */
import cookieSession from "cookie-session";
import express from "express";

interface User {
  email: string;
  password: string;
}

const app = express();
const users: User[] = [
  {
    email: "mysan@mail.se",
    password:
      "$argon2id$v=19$m=65536,t=3,p=4$AwfMFTrJt6/s9DZoLtZHMQ$Tqv+soLARMWjZL77SBMVj3aK533j3J1qXvSaXGoMEM4",
  },
];

/* Middlewares */
app.use(express.json());
app.use(
  cookieSession({
    name: "login",
    secret: "SOm3Th1ngS3cur3!", // Borde hämtas från en miljövariabel.
    maxAge: 1000 * 10, // 10sek
    httpOnly: true, // Bara webbläsaren har tillgång till den, inte Javascripten.
  })
);
/* Alla API/Endpoints */

app.get("/users", (req, res) => {
  res.status(200).json(users);
  // ENDAST FÖR DEMO
});

app.post("/users/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await argon2.hash(password);

  users.push({ email, password: hashedPassword }); // Talar om att "password ska bli krypterat."
  res.status(201).json({ email });
});

app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email
  ); /* Finns det en användare eller inte? */
  if (!user) {
    res.status(401).json("Fel email eller lösenord");
    return;
  }

  if (!(await argon2.verify(user.password, password))) {
    res.status(401).json("Fel email eller lösenord");
    return;
  }
  /* Spara emailén i en kaka */
  req.session!.email = user.email;

  res.status(200).json("Du är nu inloggad!");
});

/* Starta server */
app.listen(4300, () => {
  console.log("Server running on: http://localhost:4300");
});
