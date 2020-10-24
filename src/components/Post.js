import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postAction";

export class Post extends Component {
  handleClick = () => {
     this.props.deletePost(this.props.post.id);
     this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn red" onClick={this.handleClick}>
            Delete
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading......</div>
    );

    return (
      <div>
        <h5>{post}</h5>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let urlid = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === urlid),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => {
//       dispatch({
//         type: "DELETE_POST",
//         postid: id,
//       });
//     },
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
