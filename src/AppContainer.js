import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {productLoadStart} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    productLoadStart: () => {
      dispatch(productLoadStart());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
