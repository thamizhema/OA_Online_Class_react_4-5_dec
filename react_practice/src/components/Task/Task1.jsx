import React, { useState } from "react";
import "./task_1.css";

export default function Task1() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="section-1">
      <button onClick={decrement}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
