import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import { saveState } from "utils/localStorage";
import App from "./App";
import store from "store";

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
