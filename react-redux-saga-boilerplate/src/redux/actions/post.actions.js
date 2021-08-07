import * as type from "../types";

export function getPosts(posts) {
  return {
    type: type.FETCH_POSTS_REQUESTED,
    payload: posts,
  };
}
