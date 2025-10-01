// CORE MODULES
const express = require("express");

// CUSTOM MODULES
const userController = require("../controllers/userController");

// REQUIRE IN-BUILT ROUTER IN EXPRESS TO HANDLE ROUTES FROM CONTROLLERS
const router = express.Router();

// IMPLEMENT ROUTING
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
