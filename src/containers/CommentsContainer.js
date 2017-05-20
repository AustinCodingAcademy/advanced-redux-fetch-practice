import { connect } from "react-redux";
import Comments from "../components/Comments";
import { commentLoadStart } from "../actions";


function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log("Comments will mount");
      dispatch(commentLoadStart());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
