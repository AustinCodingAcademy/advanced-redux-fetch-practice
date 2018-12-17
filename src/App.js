import React, { Component } from "react";
import "./App.css";
import ContactsContainer from "./containers/ContactsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CommentsContainer from "./containers/CommentsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  //added products call in app need to add others loadComments etc.
  componentDidMount() {
    this.props.loadProducts();
  //   this.props.loadComments();
  //   this.props.loadContacts();
  //   this.props.loadVehicles();
  }
  render() {
    return (
      <div>
        <div style={{float: "left", width: "49%"}}>
          <h1>Contacts</h1>
          <ContactsContainer />
          <h1>Products</h1>
          <ProductsContainer />
          <h1>Vehicles</h1>
          <VehiclesContainer />
          <h1>Comments </h1>
          <CommentsContainer />
        </div>
        <div style={{float: "left", width: "49%"}}>
          <CreateThingsContainer />
        </div>
      </div>
    );
  }
}
//add other actions below to connect...this should go in app container file to keep component pure
export default App;



