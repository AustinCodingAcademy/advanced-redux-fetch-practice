import { connect } from "react-redux";
import { vehiclesLoadStart } from "../actions";
import Vehicles from "../components/Vehicles";

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(vehiclesLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
