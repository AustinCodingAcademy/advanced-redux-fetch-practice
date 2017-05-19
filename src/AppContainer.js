import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts } from "./actions";
import { loadVechicles } from "./actions";
import { loadProducts } from "./actions";
import { loadComments } from "./actions";


function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(null,mapDispatchToProps)(App);
