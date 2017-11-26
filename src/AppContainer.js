import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts, loadProducts, loadVehicles, loadComments } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    contacts: function() {
      let action = loadContacts;
      dispatch(action)
    },
    products: function() {
      let action = loadProducts;
      dispatch(action)
    },
    products: function() {
      let action = loadVehicles;
      dispatch(action)
    },
    products: function() {
      let action = loadComments;
      dispatch(action)
    },
  };
}



export default connect(null,mapDispatchToProps)(App);

// const AppContainer = connect(null,mapDispatchToProps)(App);
// export default AppContainer;
