const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller");

router.get("/", postController.getPosts);
router.post("/", postController.createPost);
router.put("/", postController.updatePost);
router.delete("/", postController.deletePost);

module.exports = router;
