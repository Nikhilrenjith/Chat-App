import React from "react";
import "./container.css";
import Sidebar from "../sidebar/Sidebar";
import Workarea from "../workarea/Workarea";

const Container = () => {
  return (
    <div className="containers">
      <Sidebar />
      <Workarea />
    </div>
  );
};

export default Container;
