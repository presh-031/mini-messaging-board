const express = require("express");
const app = express();
const morgan = require("morgan");

// middleware & static files
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
