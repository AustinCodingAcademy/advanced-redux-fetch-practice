import App from "./App";
import "./App.css";
// In AppContainer.js
// Import connect
import { connect } from "react-redux";
// Import actions loadContacts, loadVehicles, loadComments, loadProducts
import {loadComments, loadContacts, loadProducts, loadVehicles} from "./actions";


// mapDispatchToProps for these actions to props of the same name
function mapDispatchToProps(dispatch) {
  return {
    loadComments:function(){
      let action = loadComments();
      dispatch(action);
    },
    loadContacts:function(){
      let action = loadContacts();
      dispatch(action);
    },
    loadProducts:function(){
      let action = loadProducts();
      dispatch(action);
    },
    loadVehicles:function(){
      let action = loadVehicles();
      dispatch(action);
    }
  };
}

// Connect and export
// Remember how to use connect when there is no mapStateToProps
export default connect(null,mapDispatchToProps)(App);
