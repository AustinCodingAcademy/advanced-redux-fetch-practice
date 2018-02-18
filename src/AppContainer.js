import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadContacts, loadVehicles, loadComments, loadProducts } from "./actions";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadContacts,
    loadVehicles,
    loadComments,
    loadProducts
  }, dispatch);
}

export default connect(null,mapDispatchToProps)(App);
