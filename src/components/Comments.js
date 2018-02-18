import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Comments extends Component {
  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount()
    }
    console.log("comments has mounted")
  }
  render() {
    return (
      <CollapsableMapper data={this.props.comments} field="body" />
    );
  }
}

export default Comments;
