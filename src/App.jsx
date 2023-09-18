import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

const App = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <ChatWindow messages={messages} />
          <ChatInput setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
};

export default App;
