import React from "react";
import "./ChatMessage.css";

function ChatMessage({ receiver }) {
  return (
    <div className="chatMessage">
      <p
        className={` ${
          receiver
            ? "chatMessage__msg chatMessage__receiver"
            : "chatMessage__msg"
        }`}
      >
        {/* <p className="chatMessage__msg"> */}
        <span className="chatMessage__name">Attah</span>
        <span>This is a message</span>
        <span className="chatMessage__timestamp">
          {new Date().toUTCString()}
        </span>
      </p>
    </div>
  );
}

export default ChatMessage;
