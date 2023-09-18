import { useState } from "react";
import { BiSend } from "react-icons/bi";

const ChatInput = ({ setMessages }) => {
  const [chatMessage, setChatMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (chatMessage !== "") {
      setMessages((prevMessage) => [...prevMessage, chatMessage]);
      setChatMessage("");
    }
  };

  return (
    <div className="border-t p-4">
      <form onSubmit={(e) => sendMessage(e)} className="flex gap-4">
        <input
          type="text"
          className="input input-bordered input-primary flex-1"
          placeholder="Write your message here..."
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-square btn-primary">
          <BiSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
