const mongoose = require("mongoose");

// CREATE A POST MODEL USING MONGOOSE
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A post must have a title"],
    unique: true,
  },
  content: {
    type: String,
    required: [true, "A post must have content"],
  },
  time: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
