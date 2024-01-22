import React from "react";
import "./right_content.css";
import FileUploadCompenent from "./FileUploadCompenent";
import ProgressWidget from "./ProgressWidget";

export default function RightContent() {
  return (
    <div className="right-content-div">
      <div className="content-div">
        <FileUploadCompenent />
        <ProgressWidget />
      </div>
    </div>
  );
}
