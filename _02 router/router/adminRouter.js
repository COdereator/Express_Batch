const express = require('express')

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
    res.send('welcome to admin page')
})

adminRouter.get('/about', (req, res) => {
    res.send('welcome to admin about page')
})

adminRouter.get('/form', (req, res) => {
    res.send(`
        <form action="/admin/submit" method="post">
            Name : <input type="text" name="name"><br><br>
            Age : <input type="text" name="age"><br><br>
            <input type="submit" value="Submit">
        </form>    
    `)
})

const users = []
adminRouter.post('/submit', (req, res) => {
    const { name, age } = req.body;
    users.push(name);
    res.send(`
        Users : ${users}<br>       
    `)
})

module.exports = adminRouter