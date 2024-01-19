import React from "react";
import SearchInput from "../../Common/SearchInput";
import TitleText from "../../Common/TitleText";
import Category from "./Category/Category";

export default function LeftContent() {
  return (
    <div className="left-content-div">
      <SearchInput />
      <TitleText text="MyTitle" />
      <Category />
    </div>
  );
}
