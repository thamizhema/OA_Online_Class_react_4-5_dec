import React from "react";
import "./body_content.css";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";
export default function BodyContent() {
  return (
    <div className="body-content-div">
      <LeftContent />
      <RightContent />
    </div>
  );
}
