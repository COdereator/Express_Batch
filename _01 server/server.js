const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('hello welcome tot the server')
})

app.get('/about', (req, res) => {
    res.send('welocme to the about page')
})

app.get('/person', (req, res) => {
    const person = {
        id: 1,
        name: 'sumit',
        age: 23
    }
    res.send(JSON.stringify(person))
})

app.get('/form', (req, res) => {
    res.send(`
        <form action="/submit" method="post">
            Name : <input type="text" name="name"><br><br>
            Age : <input type="text" name="age"><br><br>
            <input type="submit" value="Submit">
        </form>    
    `)
})

app.post('/submit', (req, res) => {
    res.send('form submitted')
})

app.listen(3000, () => {
    console.log("server is listening");
})

// npm init
// npm i express