import React from "react";
import "./right_content.css";
import FileUploadCompenent from "./FileUploadCompenent";
import ProgressWidget from "./ProgressWidget";
import SharedFolder from "./SharedFolder";

export default function RightContent() {
  return (
    <div className="right-content-div">
      <div className="content-div">
        <FileUploadCompenent />
        <ProgressWidget />
        <SharedFolder />
      </div>
    </div>
  );
}
