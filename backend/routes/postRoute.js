// CORE MODULES
const express = require("express");

// CUSTOM MODULES
const postController = require("../controllers/postController");

// REQUIRE IN-BUILT ROUTER IN EXPRESS TO HANDLE ROUTES FROM CONTROLLERS
const router = express.Router();

// IMPLEMENT ROUTING
router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
