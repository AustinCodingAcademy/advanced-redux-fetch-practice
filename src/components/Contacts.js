import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Contacts extends Component {
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
      <CollapsableMapper data={this.props.contacts} field="name" />
    );
  }
}
export default Contacts;
