import React, { Component } from "react";
import "./App.css";
import ContactsContainer from "./containers/ContactsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CommentsContainer from "./containers/CommentsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";
import {connect} from "react-redux";
import {loadContacts, loadVehicles, loadComments, loadProducts} from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div>
        <div style={{float: "left", width: "49%"}}>
        <h1>Comments </h1>
          <CommentsContainer />
          <h1>Contacts</h1>
          <ContactsContainer />
          <h1>Vehicles</h1>
          <VehiclesContainer />
          <h1>Products</h1>
          <ProductsContainer />
        </div>
        <div style={{float: "left", width: "49%"}}>
          <CreateThingsContainer />
        </div>
      </div>
    );
  }
}
//export default (App);
function mapDispatchToProps(dispatch) {
  return {
    loadData() {
      dispatch(loadContacts());
      dispatch(loadVehicles());
      dispatch(loadComments());
      dispatch(loadProducts());
    }
  };
 }
 export default connect(null,mapDispatchToProps)(App);


