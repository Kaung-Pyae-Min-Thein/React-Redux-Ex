import React, { Component } from "react";

import { Link } from "react-router-dom";
import image from "../pokeball.png";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={image} alt="pokeball" />
            <div className="card-content">
              {/* <Link to={"/posts/" + post.id}> */}
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet </div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (reducerState) => {
  return {
    posts: reducerState.posts,
  };
};

export default connect(mapStateToProps)(Home);
