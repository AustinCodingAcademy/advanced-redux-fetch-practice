import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import loadComments from "./actions";
import loadContacts from "./actions";
import loadProducts from "./actions";
import loadVehicles from "./actions";


function mapDispatchToProps(dispatch) {
  return {

    comments: function(){
      let action = loadComments;
      dispatch(action);
    },
    contacts: function(){
      let action = loadContacts;
      dispatch(action);
    },
    products: function(){
      let action = loadProducts;
      dispatch(action);
    },
    vehicles: function(){
      let action = loadVehicles;
      dispatch(action);
    }

  };
}

export default connect(null,mapDispatchToProps)(App);
