const express = require("express");
const app = express();

const blogPosts = require("./blogPosts");

const port = 7000;

app.use(express.urlencoded({ extended: true }));

// GET ALL POST FROM API
app.get("/api/posts", (req, res) => {
  res.json({ success: true, data: blogPosts });
});

// GET SINGLE POST FROM API
app.get("/api/posts/:id", (req, res) => {
  const postId = +req.params.id;

  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ success: false, error: "Post not found" });
  }

  res.json({ success: true, data: post });
});

// ADD A POST TO THE API
app.post("/api/posts", (req, res) => {
  const post = {
    id: blogPosts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  blogPosts.push(post);

  res.json({ success: true, data: post });
});

// UPDATE A POST
app.put("/api/posts/:id", (req, res) => {
  const postId = +req.params.id;

  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ success: false, error: "Post not found" });
  }

  // Update post
  post.blog.title = req.body.title || post.title;
  post.blog.content = req.body.content || post.content;

  res.json({ success: true, data: post });
});

// DELETE A POST FROM THE API
app.delete("/api/posts/:id", (req, res) => {
  const postId = +req.params.id;

  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ success: false, error: "Post not found" });
  }

  const index = blogPosts.indexOf(post);

  blogPosts.splice(index, 1);

  res.json({ success: true, data: {} });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
