import React, { Component } from "react";
import "./App.css";
import ContactsContainer from "./containers/ContactsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CommentsContainer from "./containers/CommentsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";
import { loadContacts, loadProducts, loadVehicles, loadComments } from "./actions";
import { connect } from "react-redux";
// import AppContainer from "./AppContainer"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }
  componentDidMount() {

    this.props.loadContacts();
    this.props.loadProducts();
    this.props.loadVehicles();
    this.props.loadComments();

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

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function(contacts){
      dispatch(loadContacts(contacts))
    },
    loadProducts: function(products){
      dispatch(loadProducts(products))
    },
    loadVehicles: function(vehicles){
      dispatch(loadVehicles(vehicles))
    },
    loadComments: function(comments){
      dispatch(loadComments(comments))
    },
  }
}



export default connect(null, mapDispatchToProps)(App);

// export default App;
