import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Contacts extends Component {
  contactWillMount() {
    if (this.props.onMountContacts) {
      this.props.onMountContacts();
    }
  }
  render() {
    return (
      <CollapsableMapper data={props.contacts} field="name" />
    );
  }
}










export default Contacts;
