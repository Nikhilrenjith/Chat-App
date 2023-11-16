import React, { useState } from "react";
import "../container/container.css";
import Chat from "./Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Sidebar = () => {
  const [chats, setChats] = useState([
    {
      name: "Test1",
      lastMessage: "Last message 1",
      timeStamp: "today",
    },
    {
      name: "Test2",
      lastMessage: "Last message 2",
      timeStamp: "today",
    },
    {
      name: "Test3",
      lastMessage: "Last message 3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <dir>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <ModeNightIcon />
          </IconButton>
        </dir>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="search" placeholder="search" className="search-box" />
      </div>
      <div className="sb-chat">
        {chats.map((chats) => {
          return <Chat props={chats} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
