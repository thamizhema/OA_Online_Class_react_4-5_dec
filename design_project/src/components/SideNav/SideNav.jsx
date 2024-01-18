import React, { useState } from "react";
import "./side_nav.css";
import IconTile from "./IconTile/IconTile";
import { tileData } from "./tile_data";

export default function SideNav() {
  const [selectedTile, setSelectedTile] = useState(0);
  function onClickIconTile(index) {
    setSelectedTile(index);
  }
  return (
    <div className="side-nav-div">
      <div className="f1 side-div"></div>
      <div className="f3 side-div">
        {tileData.map((tile, ind) => {
          return (
            <IconTile
              onClick={() => onClickIconTile(ind)}
              key={ind}
              Icon={tile.icon}
              text={tile.text}
              active={selectedTile === ind}
            />
          );
        })}
      </div>
      <div className="f1 side-div"></div>
    </div>
  );
}
