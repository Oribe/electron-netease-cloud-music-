import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./styles/index.css";

function render() {
  ReactDom.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("app")
  );
}

render();
