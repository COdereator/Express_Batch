const express = require('express');
const { getHome, getAbout, getForm, postForm, getAllUser, getAllCards, getCards, getCardById } = require('../controller/adminController');

const adminRouter = express.Router();

adminRouter.get('/', getHome)

adminRouter.get('/form', getForm)

adminRouter.post('/addCard', postForm)

adminRouter.get("/cards", getCards)

adminRouter.get("/cards/:id", getCardById)

module.exports = adminRouter