import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";
import "whatwg-fetch";

fetch("http://localhost:4001/products").then((response) => {
  console.log("execute when loaded");
  console.log(response);
}).catch((err) => {
  console.log("Oops, an error happened.");
});

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
