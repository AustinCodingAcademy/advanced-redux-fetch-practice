import { connect } from "react-redux";
import Products from "../components/Products";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(){
  return {
    
  }
}

export default connect(mapStateToProps)(Products);
