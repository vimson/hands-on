const createError = require("http-errors");
const postObj = require("../models/post.model");

class Posts {
  async getPosts(req, res, next) {
    try {
      const posts = await postObj.getPosts();
      res.send(posts);
    } catch (err) {
      return next(err);
    }
  }

  async createPost(req, res, next) {
    try {
      await postObj.createPost({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        user_id: req.body.user_id,
      });
      res.statusCode = 201;
      res.send({ message: "Successfully added" });
    } catch (err) {
      return next(createError(500, err));
    }
  }

  async updatePost(req, res, next) {
    try {
      await postObj.updatePost({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        user_id: req.body.user_id,
      });
      res.statusCode = 201;
      res.send({ message: "Successfully updated" });
    } catch (err) {
      return next(createError(500, err));
    }
  }

  async deletePost(req, res, next) {
    try {
      await postObj.deletePost({
        id: req.body.id,
      });
      res.statusCode = 200;
      res.send({ message: "Successfully deleted" });
    } catch (err) {
      return next(createError(500, err));
    }
  }
}

module.exports = new Posts();
