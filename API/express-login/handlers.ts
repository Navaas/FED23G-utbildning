import argon2 from "argon2";
import { Request, Response } from "express";

interface User {
  email: string;
  password: string;
}

const users: User[] = [
  {
    email: "mysan@mail.se",
    password:
      "$argon2id$v=19$m=65536,t=3,p=4$AwfMFTrJt6/s9DZoLtZHMQ$Tqv+soLARMWjZL77SBMVj3aK533j3J1qXvSaXGoMEM4",
  },
];

export const getAllUsers = (req: Request, res: Response) => {
  res.status(200).json(users);
  // ENDAST FÖR DEMO
};

export const getUserSelf = async (req: Request, res: Response) => {
  res.status(200).json(req.session?.email);
};

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const hashedPassword = await argon2.hash(password);

  users.push({ email, password: hashedPassword }); // Talar om att "password ska bli krypterat."
  res.status(201).json({ email });
};

export const loginUser = async (req: Request, res: Response) => {
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
  /* Spara e-mailen i en kaka */
  req.session!.email = user.email;

  res.status(200).json("Du är nu inloggad!");
};
