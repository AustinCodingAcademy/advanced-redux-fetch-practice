import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadProducts} from "./actions"

function mapDispatchToProps(dispatch) {
  return {
    loadProducts() {
      dispatch(loadProducts());
    }
  };
 }
 export default connect(null,mapDispatchToProps)(App);
 
 

