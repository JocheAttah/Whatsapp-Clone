import React from "react";
import "./Chat.css";

import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";

import ChatMessage from "./ChatMessage";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar className="chat__avatar" />

        <div className="chat__info">
          <h3 className="chat__RoomName">Room name</h3>
          <p className="chat__lastSeen">Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
      <ChatMessage />
      <ChatMessage receiver />
      <ChatMessage />
      <ChatMessage receiver />
      </div>
    </div>
  );
}

export default Chat;
