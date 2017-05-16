import { connect } from "react-redux";
import Comments from "../components/Comments";
import commentsLoadStart from "./reducers";

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMountComments: () => {
      dispatch(commentsLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
