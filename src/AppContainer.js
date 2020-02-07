import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts, loadVehicles, loadComments, loadProducts} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function(contacts) {
      let action = loadContacts(contacts);
      dispatch(action);
    },
    loadVehicles: function(vehicles) {
      let action = loadVehicles(vehicles);
      dispatch(action);
    },
    loadComments: function(comments) {
      let action = loadComments(comments);
      dispatch(action);
    },
    loadProducts: function(products) {
      let action = loadProducts(products);
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(App);
