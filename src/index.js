import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";

import "whatwg-fetch";

// fetch("http://localhost:4001/products")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     dispatch(productLoadError());
//     console.log("error!!!", err);
//   });

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
