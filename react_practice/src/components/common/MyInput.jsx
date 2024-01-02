import React from "react";

export default function MyInput({
  id,
  type = "text",
  hintText = "Hint",
  lable = "Lable",
}) {
  return (
    <div>
      <label for={id}>{lable}</label>
      <input type={type} id={id} placeholder={hintText} />
    </div>
  );
}
