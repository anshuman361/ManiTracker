const express = require("express");
const isAuthenticated = require("../middleware/isAuth");
const userController = require("../controllers/userCtrl");
const categoryController = require("../controllers/categoryCtrl");
const categoryRouter = express.Router();

//!add
categoryRouter.post(
  "/api/categories/create",
  isAuthenticated,
  categoryController.create,
);
//!lists
categoryRouter.get(
  "/api/categories/lists",
  isAuthenticated,
  categoryController.lists,
);
//!update
categoryRouter.put(
  "/api/categories/update/:categoryId",
  isAuthenticated,
  categoryController.update,
);
//!delete
categoryRouter.delete(
  "/api/categories/delete/:id",
  isAuthenticated,
  categoryController.delete,
);

module.exports = categoryRouter;
