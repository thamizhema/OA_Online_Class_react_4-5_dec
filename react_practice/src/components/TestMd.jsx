import React, { useState } from "react";

import { marked } from "marked";
// const readmePath = require("./flutter_question.md");
// import readmePath from "./flutter_question.md";
// import readmePath from "./test.md";
import readmePath from "./react.svg";
export default function TestMd() {
  const [myFile, setMyFile] = useState("Hello <b>Work</b>");

  function convertMdFile() {
    const readmePath = require("./flutter_question.md");
    fetch(readmePath)
      .then((res) => {
        console.log();
        return res.text();
      })
      .then((value) => {
        console.log(value);
        setMyFile(value);
      });
  }
  return (
    <div>
      <button onClick={convertMdFile}>Test</button>
      <article dangerouslySetInnerHTML={{ __html: myFile }}></article>
    </div>
  );
}
