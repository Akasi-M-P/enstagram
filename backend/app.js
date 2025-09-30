// CORE MODULES
const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
// CUSTOM MODULES
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");

// REGULAR MODULES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// REGULAR MODULES
app.use(express.json());

// STATIC FILES URL DIRECTORY
app.use(express.static(path.join(__dirname, "..", "frontend", "html")));
app.use(express.static(path.join(__dirname, "..", "frontend", "css")));

// POST ROUTE USED
app.use("/api/v1/posts", postRoute);

// USER ROUTE USED
app.use("/api/v1/users", userRoute);

module.exports = app;
