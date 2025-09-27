const express = require("express");

// CUSTOM MODULES
const app = require("./app");

const port = 8000;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
