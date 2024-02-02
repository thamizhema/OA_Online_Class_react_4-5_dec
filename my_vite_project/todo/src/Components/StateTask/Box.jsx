import React, { useContext } from "react";
import { CountContext } from "../../App";

export default function Box() {
  const { state, setState } = useContext(CountContext);
  console.log("box comp");
  return (
    <div>
      <h1>Box</h1>
      <h3>{state.count}</h3>
      <button>Decrement</button>
      <button>Increment</button>
    </div>
  );
}
