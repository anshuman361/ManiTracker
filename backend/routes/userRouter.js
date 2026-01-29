const express = require("express");
const userController = require("../controllers/userCtrl");
const isAuthenticated = require("../middleware/isAuth");

const userRouter = express.Router();

userRouter.post("/api/users/register", userController.register);

userRouter.post("/api/users/login", userController.login);

module.exports = userRouter;
