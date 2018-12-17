import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadProducts} from './actions';
import {loadComments} from './actions';
import {loadContacts} from './actions';
import {loadVehicles} from './actions';

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: function(products){
      var action = loadProducts (products);
      dispatch(action);      
    },
    loadComments: function(comments){
      var action = loadComments(comments);
      dispatch(action);
    },
    loadContacts: function(contacts){
      var action = loadContacts(contacts);
      dispatch(action);    
    },
    loadVehicles: function(vehicles){
      var action = loadVehicles(vehicles);
      dispatch(action);  
    }
  }
}

export default connect(null, mapDispatchToProps)(App);

