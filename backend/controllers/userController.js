// CORE MODULES
const fs = require("fs");

//READ userS FROM FILE
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

// helper to format "time ago"
function getTimeAgo(createdAt) {
  const diffInSeconds = Math.floor((Date.now() - createdAt) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return Math.floor(diffInSeconds / 60) + " min ago";
  if (diffInSeconds < 86400) return Math.floor(diffInSeconds / 3600) + "h ago";
  return Math.floor(diffInSeconds / 86400) + " day(s) ago";
}

// GET ALL POST FROM API
exports.getAllUsers = (req, res) => {
  res.json({ success: true, data: users });
};

// GET SINGLE USER FROM API
exports.getUser = (req, res) => {
  const userId = +req.params.id;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, error: "user not found" });
  }

  res.json({ success: true, data: user });
};

// ADD A user TO THE API
exports.createUser = (req, res) => {
  const createdAt = Date.now();

  const user = {
    id: users.length + 1,
    title: req.body.title,
    content: req.body.content,
    time: getTimeAgo(createdAt),
  };

  users.push(user);

  res.json({ success: true, data: user });
};

// UPDATE A user
exports.updateUser = (req, res) => {
  const userId = +req.params.id;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, error: "user not found" });
  }

  // Update user
  user.title = req.body.title || user.title;
  user.content = req.body.content || user.content;

  res.json({ success: true, data: user });
};

// DELETE A user FROM THE API
exports.deleteUser = (req, res) => {
  const userId = +req.params.id;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, error: "user not found" });
  }

  const index = users.indexOf(user);

  users.splice(index, 1);

  res.json({ success: true, data: {} });
};
