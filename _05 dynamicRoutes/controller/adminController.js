const cards = [];


exports.getHome = (req, res) => {
    res.send('welcome to home page');
};


exports.getForm = (req, res) => {
    res.render('form');
};

exports.postForm = (req, res) => {
    const { title, image, desc, price } = req.body;

    const id = Math.floor(Math.random() * 100);

    cards.push({
        id,
        title,
        image,
        desc,
        price
    });

    res.redirect('/admin/cards');
};

exports.getCards = (req, res) => {
    res.render('cards', { cards });
};


exports.getCardById = (req, res) => {
    const id = req.params.id;
    const singleCard = cards.find(card => card.id == id);
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
