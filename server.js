const express = require("express");
const app = express();
const morgan = require("morgan");

const indexRoutes = require("./routes/index");

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(express.static("public"));

// connect to db
// Listen for requests
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(` Server listening on port ${port}`);
});

// routes
app.use("/", indexRoutes);
