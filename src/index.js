import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";
import "whatwg-fetch";

fetch("http://localhost:4001/products").then((response) => {
  console.log("this is the response", response);
}).catch((err) => {
  console.log("if an error occurs, this is the error", err);
});

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
