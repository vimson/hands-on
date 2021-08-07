import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "./PostComponent";
import { getPosts } from "../../redux/actions/post.actions";

const Posts = (props) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const errors = useSelector((state) => state.posts.errors);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const postItems = [];
  if (articles.length > 0) {
    articles.forEach((article, indx) => {
      postItems.push(<Post key={indx} article={article} />);
    });
  }

  return (
    <div className="p-12">
      {loading && <p>loading..</p>}
      {errors && !loading && <p>{errors}</p>}
      {postItems}
      {articles.length === 0 && !loading && <p>No users available</p>}
    </div>
  );
};

export default Posts;
