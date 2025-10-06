const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Post = require("./../../models/postModel");
// REQUIRE CONFIG FILE
dotenv.config({ path: "./config.env" });

// CONNECT DB TO APP USING MONGOOSE
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => console.log(con.connections))
  .then(() => console.log("DB Connected Successfully"))
  .then((err) => console.log(err));

// READ JSON FILE
const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf-8"));
console.log(posts);
// IMPORT DATE INTO DATABASE
const importData = async () => {
  try {
    await Post.create(posts);
    console.log("Data successfully loaded");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// DELETE ALL DATA FROM DATABASE
const deleteData = async () => {
  try {
    await Post.deleteMany();
    console.log("Data successfully deleted");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
