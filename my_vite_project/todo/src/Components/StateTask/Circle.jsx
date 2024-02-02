import React, { useContext } from "react";
import { CountContext } from "../../App";

export default function Circle() {
  const { state } = useContext(CountContext);
  return (
    <div>
      <h1>Circle</h1>
      <h3>{state.count}</h3>
      <button>Decrement</button>
      <button>Increment</button>
    </div>
  );
}
