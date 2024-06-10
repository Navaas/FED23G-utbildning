// import { Server } from "socket.io";

// const io = new Server();

// io.on("connection", (socket) => {
//   io.emit("message", "User " + socket.id + " joined the chat"); // Emit - Avge, skicka ut till alla på servern
//   console.log("A user connected " + socket.id);
// });

// const users = {};

// io.on("connection", (socket) => {
//   console.log("a user connected", socket.id);

//   socket.on("setName", (name) => {
//     users[socket.id] = name;
//     io.emit("message", `${name} has joined`);
//   });

//   socket.on("disconnect", () => {
//     const name = users[socket.id] || "Anonymous";
//     delete users[socket.id];
//     io.emit("message", `${name} has left`);
//   });

//   socket.on("message", (message) => {
//     const name = users[socket.id] || "Anonymous";
//     io.emit("message", `${name}: ${message}`);
//   });
// });

// io.listen(3000);

import { Server } from "socket.io";

const io = new Server(3000); // Startar servern direkt på port 3000

interface Users {
  [key: string]: string;
}

const users: Users = {};

io.on("connection", (socket) => {
  // När en användare ansluter
  io.emit("message", `User ${socket.id} joined the chat`);
  console.log("A user connected", socket.id);

  socket.on("setName", (name) => {
    users[socket.id] = name;
    io.emit("message", `${name} has joined`);
  });

  socket.on("disconnect", () => {
    const name = users[socket.id] || "Anonymous";
    delete users[socket.id];
    io.emit("message", `${name} has left`);
  });

  socket.on("message", (message) => {
    const name = users[socket.id] || "Anonymous";
    io.emit("message", `${name}: ${message}`);
  });
});

console.log("Socket.IO server running at http://localhost:3000/");
