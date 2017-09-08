import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts, loadVehicles, loadComments, loadProducts } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: (contacts) => {
      let action = loadContacts(contacts);
      dispatch(action);
    },
    loadVehicles: (vehicles) => {
      let action = loadVehicles(vehicles);
      dispatch(action);
    },
    loadComments: (comments) => {
      let action = loadComments(comments);
      dispatch(action);
    },
    loadProducts: (products) => {
      let action = loadProducts(products);
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
