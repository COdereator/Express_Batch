const fs = require('fs').promises;
const path = require('path')

module.exports = class Card {
    constructor(id, title, desc, image, price) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.price = price;
    }

    async save() {
        let cards = []
        const fileName = path.join(__dirname, '../data', 'cards.json')
        try {
            cards = await Card.fetchAll();
            cards.push(this);
            await fs.writeFile(fileName, JSON.stringify(cards), 'utf-8');
        } catch (error) {
            console.log(error)
        }
    }

    static async fetchAll() {
        const fileName = path.join(__dirname, '../data', 'cards.json')
        try {
            const cards = await fs.readFile(fileName, 'utf-8')
            return JSON.parse(cards);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    static async getCardById(id) {
        const fileName = path.join(__dirname, '../data', 'cards.json')
        try {
            const cards = await Card.fetchAll();
            const singleCard = cards.find((item) => item.id == id)
            return singleCard;
        } catch (error) {
            console.log(error);
        }
    }
}