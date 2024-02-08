import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./services/i18n.service";
import {UserService} from "~utils/authKeycloak";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

UserService.initKeycloak(() => root);