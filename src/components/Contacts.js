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
    return (
      <CollapsableMapper data={this.props.contacts} field="name" />
    );
  }
}


Contacts.propTypes = {
  onMountContacts: PropTypes.string,
  contacts: PropTypes.array
};







export default Contacts;
