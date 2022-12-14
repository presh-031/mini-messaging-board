const express = require("express");
const router = express.Router();

const messages = [
  {
    title: "Hello",
    text: "Hi there!, kindly work",
    user: "Amando",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Hello",
    text: "Hello World!, does this work?",
    user: "Charles",
    date: new Date().toLocaleDateString(),
  },
];

// GET all messages
router.get("/", (req, res) => {
  res.status(200).render("index", { title: "Home", messages });
});

// GET the form page
router.get("/new", (req, res) => {
  res.status(200).render("form", { title: "New Message" });
});

// POST a new message
router.post("/new", (req, res) => {
  console.log(req.body);
  const { title, text, user } = req.body;

  const newPost = {
    title,
    text,
    user,
    date: new Date().toLocaleDateString(),
  };

  messages.unshift(newPost);

  res.status(200).redirect("/");

  // console.log(messages);
});

// 404 page
router.use((req, res) => {
  res.status(404).render("404", { title: "404 not found" });
});

module.exports = router;
