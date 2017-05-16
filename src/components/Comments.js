import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";
import PropTypes from "prop-types";

class Comments extends Component {
  componentWillMount() {
    if (this.props.onMountComments) {
      this.props.onMountComments();
    }
  }

  render() {
    return (
      <CollapsableMapper data={this.props.comments} field="body" />
    );
  }
}
export default Comments;


Comments.propTypes = {
  onMountComments: PropTypes.string,
  comments: PropTypes.array
};
