import React, { useState } from "react";

import { marked } from "marked";
// const readmePath = require("./flutter_question.md");
// import readmePath from "./flutter_question.md";
// import readmePath from "./test.md";
import readmePath from "./react.svg";
export default function TestMd() {
  const [myFile, setMyFile] = useState("Hello <b>Work</b>");

  function convertMdFile() {
    require("./test.md");
    fetch(readmePath).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <button onClick={convertMdFile}>Test</button>
      <article dangerouslySetInnerHTML={{ __html: myFile }}></article>
    </div>
  );
}
