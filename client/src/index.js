import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RecoilRoot } from "recoil";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
