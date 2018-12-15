import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadProducts, loadComments, loadVehicles, loadContacts} from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadProducts() {
      dispatch(loadProducts());
    },
    loadComments() {
      dispatch(loadComments());
    },
    loadVehicles() {
      dispatch(loadVehicles());
    },
    loadContacts() {
      dispatch(loadContacts());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
