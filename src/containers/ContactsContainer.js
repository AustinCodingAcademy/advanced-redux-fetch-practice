import { connect } from "react-redux";
import Contacts from "../components/Contacts";
import { contactsLoadStart } from "../actions";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMountContacts: () => {
      console.log("farts");
      dispatch(contactsLoadStart());
    }
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
