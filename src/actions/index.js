import axios from 'axios';

export const addTask = (task) => {

    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res=>{
    //     console.log("response----", res.data)
    // })
    // .error();
    return {
        type:"ADD_TASK",
        payload: task
    }
},
deleteTask = (taskid) => {
    return {
        type: "DELETE_TASK",
        payload: taskid
    }
}

export const showPosts = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            // return {type: "POSTS", payload: res.data.slice(1, 10)};
            dispatch(getPosts(res))
        });
    }
};

export const getPosts = (posts) => {
    return {type: "POSTS", payload: posts.data.slice(1, 10)};
};

