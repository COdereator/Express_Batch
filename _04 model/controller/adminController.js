const Card = require("../model/userModel");

exports.getHome = (req, res) => {
    console.log("welcome to  Admin page!");
};

exports.getForm = (req, res) => {
    res.render("form");
};

exports.addCard = (req, res) => {
    console.log(req.body)
    const { title, desc, image, price } = req.body;
    const card = new Card(title, desc, image, price);
    card.save();
    res.redirect("/admin/cards");
};


exports.getCardById = async (req, res) => {
    const id = req.params.id;
    const card = await Card.getCardById(id);
    res.render("details", { card });
};

exports.getCards = async (req, res) => {
    const cards = await Card.fetchAll();
    res.render("cards", { cards });
};
