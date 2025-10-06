const mongoose = require("mongoose");

// CREATE A POST MODEL USING MONGOOSE
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A post must have a title"],
    unique: true,
    trim: true,
  },
  content: {
    type: String,
    required: [true, "A post must have content"],
    trim: true,
  },
  likes: {
    count: { type: Number, default: 0 },
    likedUsers: [
      {
        name: String,
        occupation: String,
      },
    ],
  },
  comments: {
    count: { type: Number, default: 0 },
    commentUsers: [
      {
        user: {
          name: String,
          occupation: String,
          text: {
            type: String,
            trim: true,
          },
        },
      },
    ],
  },
  image: [String],
  date: {
    type: Date,
    default: Date.now(),
  },
  tags: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
