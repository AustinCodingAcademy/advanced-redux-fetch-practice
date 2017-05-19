import { connect } from "react-redux";
import {productLoadStart} from "../actions";
import Products from "../components/Products";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(productLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
