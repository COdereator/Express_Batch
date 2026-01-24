const express = require('express');
const { getHome, getAbout, getForm, postForm, getAllUser, getAllCards, getCards, getCardById, deleteCardById } = require('../controller/adminController');

const adminRouter = express.Router();

adminRouter.get('/', getHome)

adminRouter.get('/form', getForm)

adminRouter.post('/addCard', postForm)

adminRouter.get("/cards", getCards)

adminRouter.get("/cards/:id", getCardById)

adminRouter.post('/cards/delete/:id', deleteCardById);

module.exports = adminRouter