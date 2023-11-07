import React from "react";
import "../container/container.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";

const Sidebar = () => {
  const icon = {
    fontSize: 40,
  };

  return (
    <div className="sidebar-container">
      <div className="header">
        <IconButton style={icon}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton>
          <PersonAddIcon />
        </IconButton>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </div>
      <div className="search">search</div>
      <div className="chat">chat</div>
    </div>
  );
};

export default Sidebar;
