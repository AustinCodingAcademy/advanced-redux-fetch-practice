import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadContacts } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    contacts: function() {
      let action = loadContacts;
      dispatch(action)
    }
  };
}


export default connect(null,mapDispatchToProps)(App);
