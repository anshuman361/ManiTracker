const express = require("express");
const categoryController = require("../controllers/categoryCtrl");
const transactionController = require("../controllers/transactionCtrl");
const userController = require("../controllers/userCtrl");
const isAuthenticated = require("../middleware/isAuth");
const transactionRouter = express.Router();

//!add
transactionRouter.post(
  "/api/transactions/create",
  isAuthenticated,
  transactionController.create
);
//! lists
transactionRouter.get(
  "/api/transactions/lists",
  isAuthenticated,
  transactionController.getFilteredTransactions
);
//! update
transactionRouter.put(
  "/api/transactions/update/:id",
  isAuthenticated,
  transactionController.update
);
//! delete
transactionRouter.delete(
  "/api/transactions/delete/:id",
  isAuthenticated,
  transactionController.delete
);

module.exports = transactionRouter;
