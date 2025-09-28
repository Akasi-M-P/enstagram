const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// CUSTOM MODULES
const app = require("./app");

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
