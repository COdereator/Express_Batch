const express = require('express')

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('welcome to user page')
})

userRouter.get('/about', (req, res) => {
    res.send('welcome to user about page')
})

userRouter.get('/contact', (req, res) => {
    res.send('welcome to user contact page')
})

module.exports = userRouter