const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

// REQUIRE CONFIG FILE
dotenv.config({ path: "./config.env" });

// CUSTOM MODULES
const port = process.env.PORT || 8000;

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

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
