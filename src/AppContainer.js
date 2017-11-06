import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts } from "./actions";
import { loadVehicles } from "./actions";
import { loadComments } from "./actions";
import { loadProducts } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function(contact) {
      dispatch(loadContacts(contact));
    },
    loadVehicles: function(vehicle) {
      dispatch(loadVehicles(vehicle));
    },
    loadComments: function(comment) {
      dispatch(loadComments(comment));
    },
    loadProducts: function(product) {
      dispatch(loadProducts(product));
    }
  }
}

export default connect(null,mapDispatchToProps)(App);
