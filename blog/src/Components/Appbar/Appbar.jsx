import React from "react";
import { Link } from "react-router-dom";
import { myRoutes } from "../constent/myRoutes";

export default function Appbar() {
  return (
    <div>
      <Link to={myRoutes.home}>Home</Link>
      <Link to={myRoutes.about}>About</Link>
      <Link to={myRoutes.work}>Work</Link>
    </div>
  );
}
