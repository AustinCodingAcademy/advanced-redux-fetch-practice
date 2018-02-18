import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Contacts extends Component {
  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
    console.log("contacts mounted")
  }
  render() {
    return (
      <CollapsableMapper data={this.props.contacts} field="name" />
    );
  }
}

export default Contacts;
