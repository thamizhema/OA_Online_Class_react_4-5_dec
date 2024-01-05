import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
