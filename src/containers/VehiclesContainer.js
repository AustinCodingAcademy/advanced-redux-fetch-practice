import { connect } from "react-redux";
import Vehicles from "../components/Vehicles";
import { vehicleLoadStart } from "../actions";

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(vehicleLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
