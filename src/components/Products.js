import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Products extends Component {
  componentWillMount(){
    if (this.props.onMount){
      this.props.onMount();
    }
  }

  render(){
    return (
      <CollapsableMapper data={this.props.products} field="name" />
    );
  }
}


export default Products;
