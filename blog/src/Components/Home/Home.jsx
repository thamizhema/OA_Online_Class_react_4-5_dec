import React, { useState } from "react";
import Appbar from "../Appbar/Appbar";
import { useNavigate } from "react-router-dom";
import { myRoutes } from "../constent/myRoutes";

export default function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function addCount() {
    setCount(count + 1);
    console.log(count);
    if (count === 3) {
      navigate(myRoutes.about);
    }
  }
  return (
    <div>
      <h1>Home</h1>

      <h2>{count}</h2>
      <button onClick={addCount}>Add</button>
    </div>
  );
}
