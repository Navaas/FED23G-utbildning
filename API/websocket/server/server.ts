import { Server } from "socket.io";

const io = new Server();

io.on("connection", (socket) => {
  socket.emit("message", "Welcome user!"); // Emit - Avge, skicka ut
  console.log("A user connected");
});

io.listen(3000);
