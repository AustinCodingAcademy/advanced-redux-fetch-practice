import { connect } from "react-redux";
import Products from "../components/Products";
import {
  productsLoaded,
  createProduct
} from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(createProduct());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
