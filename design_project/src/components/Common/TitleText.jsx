import React from "react";

export default function TitleText({ text = "Title" }) {
  return (
    <p
      style={{
        fontWeight: "bold",
        color: "#1D417C",
        fontSize: 20,
      }}
    >
      {text}
    </p>
  );
}
