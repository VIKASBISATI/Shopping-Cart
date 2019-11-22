const express = require('express')
const userRouter = express.Router();
const userController = require('../Controller/userController')


console.log("in router");

userRouter.post('/login', userController.login)
userRouter.post('/register', userController.register)
module.exports = userRouter;