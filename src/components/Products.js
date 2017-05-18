import React, { Component } from "react";

// the call originates here with the prop onMount.
// is then sent to the container
class Products extends Component {
  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    return (
      <div>
        dkmk{this.props.products}</div>
    );
  }
}


export default Products;
