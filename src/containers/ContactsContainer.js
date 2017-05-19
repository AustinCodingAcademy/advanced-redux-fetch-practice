import { connect } from "react-redux";
import { contactsLoadStart } from "../actions";
import Contacts from "../components/Contacts";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(contactsLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
