import { connect } from "react-redux";
import Vehicles from "../components/Vehicles";
import { vehiclesLoadStart } from "../actions";


function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onMountVehicles: () => {
      dispatch(vehiclesLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
