const express = require("express");
const { getAllUsers } = require("../controllers/users_controllers");
const router = express.Router();

module.exports = function users_routers(app) {
  router.get("/", getAllUsers);
  return app.use("/api/v1/users", router);
};
