import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {contactLoadStart,
        vehicleLoadStart,
        commentLoadStart,
        productLoadStart
      } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: () => {
      dispatch(contactLoadStart());
    },
    loadVehicles: () => {
      dispatch(vehicleLoadStart());
    },
    loadComments: () => {
      dispatch(commentLoadStart());
    },
    loadProducts: () => {
      dispatch(productLoadStart());
    },
  };
}

export default connect(null,mapDispatchToProps)(App);
