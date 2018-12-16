import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadProducts, loadComments, loadContacts, loadVehicles} from "./actions"

function mapDispatchToProps(dispatch) {
  return {


    loadProducts() {
      dispatch(loadProducts());
    },
    loadComments() {
      dispatch(loadComments());
    },
    loadContacts() {
      dispatch(loadContacts());
    },
    loadVehicles() {
      dispatch(loadVehicles());
    },


  };
}

export default connect(null,mapDispatchToProps)(App);
