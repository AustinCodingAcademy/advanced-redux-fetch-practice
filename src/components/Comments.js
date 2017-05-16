import React, { Component } from "react";
import CollapsableMapper from "./CollapsableMapper";

class Comments extends Component{
  componentDidMount(){
      console.log("component has mounted");
  }

  render() {
    return (
      <CollapsableMapper data={this.props.comments} field="body" />
    );
  }
}

export default Comments;
