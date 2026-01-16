const fs = require("fs").promises;
const path = require("path");

module.exports = class Card {
  constructor(title, desc, image, price) {
    this.title = title;
    this.desc = desc;
    this.image = image;
    this.price = price;
  }

    async save() {
    const filePath = path.join(__dirname, "../data/", "cards.json");
    let cards = [];

    try {
      const data = await fs.readFile(filePath, "utf-8");
      cards = JSON.parse(data);
    } catch (error) {
      cards = [];
    }

    cards.push(this);

    try {
      await fs.writeFile(filePath, JSON.stringify(cards));
    } catch (error) {
      console.log("Error writing file:", error);
    }
  }

  static async fetchAll() {
    const filePath = path.join(__dirname, "../data/", "cards.json");
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getCardById(id) {
    try {
      const cards = await Card.fetchAll();
      const singleCard = cards.find((card) => card.id == id);
      return singleCard;
    } catch (error) {
      console.log(error);
    }
  }
};
