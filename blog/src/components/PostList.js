import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId }></UserHeader>
          </div>
        </div>
      );
    });
  }
  render() {
    //console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  // state.posts is received from combineReducers present in main index.js
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);
