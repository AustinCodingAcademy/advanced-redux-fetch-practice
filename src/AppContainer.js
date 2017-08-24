import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts } from "./actions/index";
import { loadVehicles } from "./actions/index";
import { loadProducts } from "./actions/index";
import { loadComments } from "./actions/index";


function mapDispatchToProps(dispatch) {
  return {

    loadContacts: function() {
      const action = loadContacts();
      dispatch(action);
    },

    loadVehicles: function() {
      const action = loadVehicles();
      dispatch(action);
    },

    loadProducts: function() {
      const action = loadProducts();
      dispatch(action);
    },

    loadComments: function() {
      const action = loadComments();
      dispatch(action);
    }
  };

}


export default connect(null,mapDispatchToProps)(App);
