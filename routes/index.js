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
app.get("/", (req, res) => {
  res.status(200).render("index", {});
});

// POST a new message
app.post("/new", (req, res) => {});
module.exports = router;
