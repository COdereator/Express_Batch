exports.getHome = (req, res) => {
    res.send('welcome to home page')
}

exports.getForm = (req, res) => {
    res.render("form")
}

const cards = []
exports.postForm = (req, res) => {
    const { title, image, desc, price } = req.body;
    const id = Math.floor(Math.random() * 100)
    cards.push({ id, title, image, desc, price });
    res.redirect('/admin/cards')
}

exports.getCards = (req, res) => {
    res.render("cards", { cards })
}
exports.getCardById = (req, res) => {
    const id = req.params.id
    const singleCard = cards.find((item) => item.id == id)
    res.render('details', { singleCard })
}