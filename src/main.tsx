import * as React from "react";
import * as ReactDOM from "react-dom";
import Puzzle from "./puzzle/Puzzle";
import { style, cssRaw } from "typestyle";

const wrapperStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
});

cssRaw(`
  html, body, #main {
    height: 100%;
    user-select: none;
  }
`);

ReactDOM.render(
  <div className={wrapperStyle}>
    <Puzzle />
  </div>,
  document.getElementById("main")
);
