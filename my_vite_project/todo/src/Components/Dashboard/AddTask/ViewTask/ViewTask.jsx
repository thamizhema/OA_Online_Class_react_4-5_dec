import React from "react";
import { useLocation } from "react-router-dom";

export default function ViewTask() {
  const { state } = useLocation();

  return (
    <div>
      <h1>ViewTask</h1>
      <p>{state.task}</p>
      {/* <button
        onClick={() => {
          console.log(state);
        }}
      >
        Location
      </button> */}
    </div>
  );
}
