import React from "react";

const Chat = () => {
  return (
    <div className="chat-container">
      <p className="chat-icon">{props.name[0]}</p>
      <p className="chat-title">{props.name}</p>
      <p className="chat-lastMessage">{props.lastMessage}</p>
      <p className="chat-timeStamp">{props.timeStamp}</p>
    </div>
  );
};

export default Chat;
