const express = require('express');
const { getHome, getAbout, getForm, postForm, getAllUser } = require('../controller/adminController');

const adminRouter = express.Router();

adminRouter.get('/', getHome)

adminRouter.get('/about', getAbout)

adminRouter.get('/form', getForm)

adminRouter.post('/submit', postForm)

adminRouter.get('/getAllUsers', getAllUser)

module.exports = adminRouter