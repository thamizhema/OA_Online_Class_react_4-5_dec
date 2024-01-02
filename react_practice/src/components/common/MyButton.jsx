import React from "react";
import "./my_button.css";

export default function MyButton(props) {
  console.log(props);
  return (
    <button
      style={props.style ? props.style : null}
      className={`btn ${props.cl ? props.cl : ""}`}
    >
      {props.children}
    </button>
  );
}
