const express = require("express");
const app = express();
const morgan = require("morgan");

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to the app",
  });
});

// Listen for requests
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(` Server listening on port ${port}`);
});
