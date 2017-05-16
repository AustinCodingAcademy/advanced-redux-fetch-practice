import { connect } from "react-redux";
import Contacts from "../components/Contacts";
import contactsLoadStart from "./reducers";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMountContacts: () => {
      dispatch(contactsLoadStart());
    }
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
