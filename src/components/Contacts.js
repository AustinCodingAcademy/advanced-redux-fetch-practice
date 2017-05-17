import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";
import PropTypes from "prop-types";

class Contacts extends Component {
  contactWillMount() {
    if (this.props.onMountContacts) {
      this.props.onMountContacts();
    }
  }
  render() {
    console.log("WHy is this broke?")
    return (
      <CollapsableMapper data={this.props.contacts} field="name" />
    );
  }
}

export default Contacts;

Contacts.propTypes = {
  onMountContacts: PropTypes.string,
  contacts: PropTypes.array
};
