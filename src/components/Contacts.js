import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Contacts extends Component {
  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    console.log(this.props.contacts, "these are from ContactsComponent");
    return (
      <CollapsableMapper data={props.contacts} field="name" />
    );
  }
}

export default Contacts;
