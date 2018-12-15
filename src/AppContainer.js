import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadProducts, loadContacts, loadVehicles, loadComments} from "./actions"


function mapDispatchToProps(dispatch) {
  return {
    loadProducts() {
      dispatch(loadProducts());
    },
    loadContacts(){
      dispatch(loadContacts());
    },
    loadVehicles(){
      dispatch(loadVehicles());
    },
    loadComments(){
      dispatch(loadComments());
    }
  };
}

 export default connect(null,mapDispatchToProps)(App);
 

