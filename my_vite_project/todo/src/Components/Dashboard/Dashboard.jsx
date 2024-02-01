import React from "react";
import Appbar from "./Appbar/Appbar";
import Home from "./Home/Home";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Appbar />
      <span>dashboard</span>
      <Outlet />
    </div>
  );
}
