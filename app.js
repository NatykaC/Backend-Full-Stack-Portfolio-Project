const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to the Still not sure what to make App!")
})

module.exports = app;
