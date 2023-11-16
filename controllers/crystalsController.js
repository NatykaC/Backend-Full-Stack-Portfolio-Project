const express = require("express");
const crystals = express.Router();
const {getAllCrystals} = require("../queries/crystals.js");

crystals.get("/", async (req, res)=>{
    const allCrystals = await getAllCrystals()
    if(allCrystals[0]){
        res.status(200).json(allCrystals)
    } else {
        res.status(500).json({error: "SERVER ERROR!"})
    }
});

module.exports = crystals;