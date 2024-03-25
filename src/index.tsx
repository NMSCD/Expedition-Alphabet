import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import "./scss/main.scss";
import "./scss/custom.scss";
import "react-tippy/dist/tippy.css";
import "react-image-lightbox/style.css";

const darkModeClass = localStorage.getItem("dark-mode") ?? "";

ReactDOM.render(
  <React.StrictMode>
    <App darkMode={darkModeClass} />
  </React.StrictMode>,
  document.getElementById("alphabet")
);
