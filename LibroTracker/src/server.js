const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2021;
const URL = process.env.FE_URL || "http://localhost:3030"; 

app.use(express.json());
app.use("/api/books", require("./backend/BooksRoutes.js"));


