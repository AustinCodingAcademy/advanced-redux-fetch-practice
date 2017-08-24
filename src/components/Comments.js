import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Comments extends Component {
  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }
  render() {
    return (
      <CollapsableMapper data={this.props.comments} field="name" />
    );
  }
}
export default Comments;
