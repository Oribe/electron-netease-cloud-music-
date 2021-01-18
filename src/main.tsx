import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

function render() {
  ReactDom.render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>,
    document.getElementById("app")
  );
}

render();
