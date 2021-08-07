import * as type from "../types";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = function (state = initialState, action) {
  switch (action.type) {
    case type.FETCH_POSTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };

    case type.FETCH_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        posts: action.message,
      };

    default:
      return state;
  }
};

export default postsReducer;
