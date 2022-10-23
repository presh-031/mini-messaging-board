const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// GET all messages
router.get("/", (req, res) => {
  res.status(200).render("index", { title: "Home", messages });
});

// POST a new message
router.post("/new", (req, res) => {
  res.status(200).render("form", { title: "New Message" });
});

module.exports = router;
