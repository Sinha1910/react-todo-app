import {combineReducers} from "redux";

const taskReducer = (state= [], action) => {
    switch(action.type){
        case "ADD_TASK":
                state = state.concat(action.payload);
            break;
        case "DELETE_TASK":
                state = state.slice();
                state.splice(action.payload, 1);
            break;
        default:
            return state;
    }
    return state;
},
postsReducer = (state = [], action) => {
    switch(action.type){
        case "POSTS":
            console.log("actions", state)
            return Object.assign({}, state, {
                posts: action.payload
              });
        default:
            return state;
    }
    // return state;
}

var reducers = combineReducers({
    tasks: taskReducer,
    posts: postsReducer
});

export default reducers;