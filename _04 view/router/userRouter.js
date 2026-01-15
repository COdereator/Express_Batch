const express = require('express');
const { getHome, getAbout, getContact, getAllUsers } = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/', getHome)

userRouter.get('/about', getAbout)

userRouter.get('/contact', getContact)

userRouter.get('/getAllUsers', getAllUsers)

module.exports = userRouter