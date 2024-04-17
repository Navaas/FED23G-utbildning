import cookieSession from "cookie-session";
import "dotenv/config";
import express from "express";
import { getAllUsers, getUserSelf, loginUser, registerUser } from "./handlers";
import { isLoggedIn } from "./middlewares";

const app = express();

/* Middlewares */
app.use(express.json());
app.use(
  cookieSession({
    name: "login",
    secret: process.env.SECRET || "SOm3Th1ngS3cur3!", // En miljövariabel
    maxAge: 1000 * 10, // 10sek
    httpOnly: true, // Bara webbläsaren har tillgång till den, inte Javascripten.
  })
);

/* Alla API/Endpoints */
app.get("/users", getAllUsers);
app.get("/users/auth", isLoggedIn, getUserSelf);
app.post("/users/register", registerUser);
app.post("/users/login", loginUser);

/* Starta server */
app.listen(4300, () => {
  console.log("Server running on: http://localhost:4300");
});
