import { useEffect, useState } from "react";
import { socket } from "./socket";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [inputMessage, setInputMessage] = useState("");

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

  const handleNameSubmit = () => {
    if (name) {
      socket.emit("setName", name);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage) {
      socket.emit("message", inputMessage);
      setInputMessage(""); // Clear the input field after sending
    }
  };

  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   function onMessage(value: string) {
  //     setMessages((previous) => [...previous, value]);
  //   }

  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);
  //   socket.on("message", onMessage);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //     socket.off("message", onMessage);
  //   };
  // }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      {isConnected ? "Connected" : "Not Connected"}

      {messages.map((message) => (
        <p>{message}</p>
      ))}

      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleNameSubmit}>Set Name</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter a message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send Message</button>
      </div>

      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}
