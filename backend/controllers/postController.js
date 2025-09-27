// CORE MODULES
const fs = require("fs");

//READ POSTS FROM FILE
const posts = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/posts.json`)
);

// GET ALL POST FROM API
exports.getAllPosts = (req, res) => {
  res.json({ success: true, data: posts });
};

// GET SINGLE POST FROM API
exports.getPost = (req, res) => {
  const postId = +req.params.id;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ success: false, error: "Post not found" });
  }

  res.json({ success: true, data: post });
};

// ADD A POST TO THE API
exports.createPost = (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  posts.push(post);

  res.json({ success: true, data: post });
};

// UPDATE A POST
exports.updatePost = (req, res) => {
  const postId = +req.params.id;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ success: false, error: "Post not found" });
  }

  // Update post
  post.blog.title = req.body.title || post.title;
  post.blog.content = req.body.content || post.content;

  res.json({ success: true, data: post });
};

// DELETE A POST FROM THE API
exports.deletePost = (req, res) => {
  const postId = +req.params.id;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ success: false, error: "Post not found" });
  }

  const index = posts.indexOf(post);

  posts.splice(index, 1);

  res.json({ success: true, data: {} });
};
