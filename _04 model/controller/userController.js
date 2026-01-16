exports.getHome = (req, res) => {
    res.send('welcome to user page')
}

exports.getAbout = (req, res) => {
    res.send('welcome to about page')
}

exports.getContact = (req, res) => {
    res.send('welcome to contact page')
}

exports.getAllUsers = (req, res) => {
    res.redirect('/admin/getAllUsers')
}