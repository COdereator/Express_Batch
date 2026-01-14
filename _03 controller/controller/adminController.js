exports.getHome = (req, res) => {
    res.send('welcome to home page')
}

exports.getAbout = (req, res) => {
    res.send('welcome to admin about page')
}

exports.getForm = (req, res) => {
    res.send(`
        <form action="/admin/submit" method="post">
            Name : <input type="text" name="name"><br><br>
            Age : <input type="text" name="age"><br><br>
            <input type="submit" value="Submit">
        </form>    
    `)
}

const users = []
exports.postForm = (req, res) => {
    const { name, age } = req.body;
    users.push(name);
    res.redirect('/admin/getAllUsers')
}

exports.getAllUser = (req, res) => {
    res.send(`
        Users : ${users}<br>       
    `)
}