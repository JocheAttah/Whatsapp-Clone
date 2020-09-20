import React from "react";
import "./Sidebar.css";

import SidebarChat from "./SidebarChat";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
// import { SearchOutlined } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars3.githubusercontent.com/u/39128641?s=460&u=fc6522969d033a4ed02f00ec1f56ffee419cbad2&v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
              {/* <SearchOutlined /> */}
              <SearchIcon className="sidebar__searchIcon" />
              <input type="text" placeholder="Search or Start a new Chat"/>
          </div>
      </div>
      <div className="sidebar__chats">
      
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
