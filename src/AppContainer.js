import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadActions, loadVehicles, loadComments, loadProducts} from './actions';

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(null,mapDispatchToProps)(App);
