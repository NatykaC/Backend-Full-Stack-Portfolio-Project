const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to Crystals App!")
});

const crystalsController = require("./controllers/crystalsController.js");

app.use("/crystals", crystalsController);


app.get("*", (req, res)=>{
    res.status(404).send("Page not found!")
});

module.exports = app;
