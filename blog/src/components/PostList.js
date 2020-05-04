import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends React.Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        console.log(this.props.posts);
        return <div>Post List</div>;
    }
}
const mapStateToProps = state => {
    // state.posts is received from combineReducers present in main index.js
    return {posts: state.posts};
};
export default connect(mapStateToProps, {fetchPosts}) (PostList);