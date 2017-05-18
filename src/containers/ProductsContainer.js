import { connect } from "react-redux";
import Products from "../components/Products";
import { productLoadStart } from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

// this dispatch method returns as thunk function from ../actions
// runs multiple dipatches when the fetch gets a response from the server
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log("Products did load in Products Container");
      dispatch(productLoadStart());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
