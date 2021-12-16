import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RecoilRoot } from "recoil";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import SaveOrNotModal from "./components/ModalSaveOrNot/SaveOrNotModal";
import { Autocomplete } from "./components/Home-Rightbar/Autocomplete";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
        {/* <Autocomplete /> */}
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
