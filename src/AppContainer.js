import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts, loadVehicles, loadComments, loadProducts } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function () {
      dispatch(loadContacts());
    },
    loadVehicles: function () {
      dispatch(loadVehicles());
    },
    loadComments: function () {
      dispatch(loadComments());
    },
    loadProducts: function () {
      dispatch(loadProducts());
    },
  };
}

export default connect(null,mapDispatchToProps)(App);
