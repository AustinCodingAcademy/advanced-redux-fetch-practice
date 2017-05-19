import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    return (
      <CollapsableMapper data={this.props.comments} field="body" />
    );
  }
}
export default Comments;
