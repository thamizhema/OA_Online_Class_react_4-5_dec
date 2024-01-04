import React from "react";

export default function Card({ logo, title, subtitle, color }) {
  return (
    <div
      className="card-div"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        alignItems: "center",
        border: "2px solid black",
        margin: 5,
      }}
    >
      <h1>{logo}</h1>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button style={{ background: color }}>Button</button>
    </div>
  );
}
