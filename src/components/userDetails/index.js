import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showPosts} from '../../actions/index'
class UserDetails extends React.Component{

    posts(){
        return this.props.posts.posts.map((post) => {
            return (
                <li key={post.id}>{post.title}</li>
            );
        })
    }

    render(){
        return (<div>
            <ul>
                {
                    this.props.posts.posts ? this.posts() : <li>No posts yet</li>
                }
            </ul>
            <div>
                <button onClick={() => this.props.showPosts()}>Show Posts</button>
            </div>
        </div>);
    }
}



function mapStateToProps(state){
    console.log("-state---", state)
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({showPosts:showPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)