const Card = require("../models/adminModels");

exports.getHome = (req, res) => {
    res.send('welcome to home page');
};

exports.getForm = (req, res) => {
    res.render('form');
};

exports.postForm = async (req, res) => {
    const { title, image, desc, price } = req.body;
    const id = Math.floor(Math.random() * 100);
    const card = new Card(id, title, desc, image, price);
    await card.save();
    res.redirect('/admin/cards');
};

exports.getCards = async (req, res) => {
    const cards = await Card.fetchAll();
    res.render('cards', { cards });
};

exports.getCardById = async (req, res) => {
    const id = req.params.id;
    const singleCard = await Card.getCardById(id);
    res.render('details', { singleCard });
};

exports.deleteCardById = (req, res) => {
    const id = req.params.id;
    const index = cards.findIndex(card => card.id == id);
    if (index !== -1) {
        cards.splice(index, 1);
    }
    res.redirect('/admin/cards');
};
