import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Vehicles extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    return (
      <CollapsableMapper data={this.props.vehicles} field="year" field1="make" field2="model" />
    );
  }
}
export default Vehicles;
