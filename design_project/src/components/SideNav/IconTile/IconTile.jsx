import React from "react";
import "./icon_tile.css";

export default function IconTile({ active, text, Icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="icon-tile-div"
      style={{ background: active && "#00000037" }}
    >
      {<Icon size={25} />}
      <span>{text}</span>
    </div>
  );
}
