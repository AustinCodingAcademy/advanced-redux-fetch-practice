import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts, loadVehicles, loadComments, loadProducts} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts:function(){
      let action = loadContacts();
      dispatch(action);
    },
    loadVehicles:function(){
      let action = loadVehicles();
      dispatch(action);
    },
    loadComments:function(){
      let action = loadComments();
      dispatch(action);
    },
    loadProducts:function(){
      let action = loadProducts();
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(App);

