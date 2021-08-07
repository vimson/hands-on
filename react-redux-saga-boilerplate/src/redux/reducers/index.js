import { combineReducers } from "redux";
import postReducer from "./post.reducers";

export default combineReducers({
  posts: postReducer,
});
