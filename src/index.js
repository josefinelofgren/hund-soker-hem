import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/normalize.css";
import "./stylesheets/index.scss";
import App from "./App";
import i18next from "./translations";

import { store } from "./redux/store";

const render = function () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

store.subscribe(render);
