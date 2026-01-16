const express = require("express");
const {
  getHome,
  getForm,
  addCard,
  getCards,
  getCardById,
} = require("../controller/adminController");

const adminRouter = express.Router();

adminRouter.get("/", getHome);

adminRouter.get("/form", getForm);

adminRouter.post("/addCard", addCard);

adminRouter.get("/cards", getCards);

adminRouter.get("/details/:id", getCardById);

module.exports = { adminRouter };
