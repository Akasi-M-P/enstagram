// CORE MODULES
const express = require("express");

const app = express();
// CUSTOM MODULES
const postRoute = require("./routes/postRoute");

// REGULAR MODULES
app.use(express.json());

// POST ROUTE USED
app.use("/api/v1/posts", postRoute);

module.exports = app;
