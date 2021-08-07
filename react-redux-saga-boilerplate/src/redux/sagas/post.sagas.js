import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../types";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchPosts() {
  try {
    const posts = yield call(getApi);
    yield put({ type: type.FETCH_POSTS_SUCCESS, posts: posts });
  } catch (err) {
    yield put({
      type: "FETCH_POSTS_FAILED",
      message: err.message,
    });
  }
}

function* postSaga() {
  yield takeEvery(type.FETCH_POSTS_REQUESTED, fetchPosts);
}

export default postSaga;
