import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
            <h2> Chat Name </h2>
            <p> This is the last mesaage for the chat </p>
        </div>
        </div>
    )
}

export default SidebarChat
