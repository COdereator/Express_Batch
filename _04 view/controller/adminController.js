exports.getHome = (req, res) => {
    res.send('welcome to home page')
}

exports.getForm = (req, res) => {
    res.render("form")
}

const cards = []
exports.postForm = (req, res) => {
    const data = req.body;
    cards.push(data);
    res.redirect('/admin/cards')
}

exports.getCards = (req, res) => {
    res.render("cards", { cards })
}