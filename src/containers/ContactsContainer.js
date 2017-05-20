import { connect } from "react-redux";
import Contacts from "../components/Contacts";
import { contactLoadStart } from "../actions";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(contactLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
