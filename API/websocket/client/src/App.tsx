import { useEffect, useState } from "react";
import { socket } from "./socket";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessage(value: string) {
      setMessages((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      {isConnected ? "Connected" : "Not Connected"}
    </div>
  );
}
