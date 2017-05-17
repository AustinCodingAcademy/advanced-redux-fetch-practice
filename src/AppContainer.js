import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts, loadComments, loadVehicles, loadProducts} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts() {
      dispatch(loadContacts());
    },
    loadComments() {
      dispatch(loadComments());
    },
    loadVehicles() {
      dispatch(loadVehicles());
    },
    loadProducts() {
      dispatch(loadProducts());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
