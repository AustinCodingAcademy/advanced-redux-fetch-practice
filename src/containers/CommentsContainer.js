import { connect } from "react-redux";
import Comments from "../components/Comments";
import {
  commentsLoaded,
  createComment
} from "../actions";

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(createComment());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
