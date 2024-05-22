import { Server } from "socket.io";

const io = new Server();

io.on("connection", (socket) => {
  io.emit("message", "User " + socket.id + " joined the chat"); // Emit - Avge, skicka ut till alla på servern
  console.log("A user connected " + socket.id);
});

io.listen(3000);
