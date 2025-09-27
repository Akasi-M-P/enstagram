// CORE MODULES
const express = require("express");

const app = express();
// CUSTOM MODULES
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");

// REGULAR MODULES
app.use(express.json());

// POST ROUTE USED
app.use("/api/v1/posts", postRoute);

// USER ROUTE USED
app.use("/api/v1/users", userRoute);

module.exports = app;
