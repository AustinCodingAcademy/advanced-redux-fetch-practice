import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadProducts, loadContacts, loadComments, loadVehicles } from './actions';


// don't have to put function in a var called mapDispatchToProps
export default connect(null, (d) => {
  return {
    // d is dispatch
    loadProducts: () => d(loadProducts()),
    loadContacts: () => d(loadContacts()),
    loadComments: () => d(loadComments()),
    loadVehicles: () => d(loadVehicles()),
  }
})(App);
