import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./store";

function render() {
  ReactDom.render(
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </StrictMode>,
    document.getElementById("app")
  );
}

render();
