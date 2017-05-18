import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";
import PropTypes from "prop-types";

class Contacts extends Component {
  componentWillMount() {
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

export default Contacts;

Contacts.propTypes = {
  onMountContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array
};
