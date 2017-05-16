import { connect } from "react-redux";
import Products from "../components/Products";
import productLoadStart from "./reducers";

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
