const ChatWindow = ({ messages }) => {
  return (
    <div className="h-[calc(100vh-160px)] overflow-y-auto p-4">
      <div className="chat chat-start">
        <div className="chat-bubble bg-gray-600">
          Hello User! Here you can write messages ✌️
        </div>
      </div>
      {messages.map((message, index) => (
        <div className="chat chat-end" key={index}>
          <div className="chat-bubble chat-bubble-primary">{message}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
