import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadProducts} from './actions';
import {loadComments} from './actions';
import {loadContacts} from './actions';
import {loadVehicles} from './actions';

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(null,(d)=>{
  return {
    loadProducts: ()=>d(loadProducts());


  }
})(App);

// export default connect(null,mapDispatchToProps)(App);
