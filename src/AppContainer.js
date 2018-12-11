import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadProducts } from './actions';


// don't have to put function in a var called mapDispatchToProps
export default connect(null, () => {
  return {
    // d is dispatch
    loadProducts: (d) => d(loadProducts())
  }
})(App);
