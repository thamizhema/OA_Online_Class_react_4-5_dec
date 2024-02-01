import React from "react";
import { Link } from "react-router-dom";
import "./appbar.scss";

export default function Appbar() {
  return (
    <ul className="nav-items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/add_task"> Add Task</Link>
      </li>
      <li>
        <Link to="/login"> Logout</Link>
      </li>
    </ul>
  );
}
