import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/reducer";
import { thunk } from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
