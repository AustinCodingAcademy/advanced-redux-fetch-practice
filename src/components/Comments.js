import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Comments extends Component {
  
  render() {
    return (
      <CollapsableMapper data={this.props.comments} field="body" />
    );
  }
}
export default Comments;
