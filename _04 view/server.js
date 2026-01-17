const express = require('express');
const userRouter = require('./router/userRouter');
const adminRouter = require('./router/adminRouter');

const app = express();

app.use(express.urlencoded())
app.use(express.json())

// form -> data -> req.body

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.use('/user', userRouter)
app.use('/admin', adminRouter)

app.listen(3000, () => {
    console.log("server is listening");
})

// npm init
// npm i express
// npm i ejs
// npm i nodemon
// https://github.com/COdereator/Express_Batch