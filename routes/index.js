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

// GET the form
router.get("/new", (req, res) => {
  res.status(200).render("form", { title: "New Message" });
});

// POST a new message
router.post("/new", (req, res) => {});

// 404 page
router.use((req, res) => {
  res.status(404).render("404", { title: "404 not found" });
});

module.exports = router;
