import React from "react";
import Appbar from "../Appbar/Appbar";
import { useNavigate } from "react-router-dom";
import { myRoutes } from "../constent/myRoutes";

export default function Work() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Work</h1>
      <button onClick={() => navigate(myRoutes.about)}>About</button>
    </div>
  );
}
