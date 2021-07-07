import React, { Component } from "react";
import CollapsableMapper from "./CollapsableMapper";

// the call originates here with the prop onMount.
// is then sent to the container
class Products extends Component {
  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    console.log(this.props.products, "these are from ProductsComponent");
    return (
      <CollapsableMapper data={this.props.products} field="name" />
    );
  }
}


export default Products;
