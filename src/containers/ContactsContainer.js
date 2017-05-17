import { connect } from "react-redux";
import Contacts from "../components/Contacts";
import { contactsLoadStart } from "../actions";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  console.log("Whi is this broke too?")
  return {
    onMountContacts: () => {
      dispatch(contactsLoadStart());
    }
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
