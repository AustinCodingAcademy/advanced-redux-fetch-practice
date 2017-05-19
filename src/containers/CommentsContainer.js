import { connect } from "react-redux";
import { commentsLoadStart } from "../actions";
import Comments from "../components/Comments";

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(commentsLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
