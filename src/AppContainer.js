import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts, loadVehicles, loadComments, loadProducts} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts,
    loadVehicles,
    loadComments,
    loadProducts
  };
}

export default connect(null,mapDispatchToProps)(App);
