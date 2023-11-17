const express = require("express");
const crystals = express.Router();
const {getAllCrystals, getCrystal, createCrystal} = require("../queries/crystals.js");
const {checkName, checkColor, checkBooleans} = require("../validations/checkCrystals.js")

crystals.get("/", async (req, res)=>{
    const allCrystals = await getAllCrystals()
    if(allCrystals[0]){
        res.status(200).json(allCrystals)
    } else {
        res.status(500).json({error: "SERVER ERROR!"})
    }
});

crystals.get("/:id", async (req, res)=>{
    const {id} = req.params;
    const oneCrystal = await getCrystal(id)
    if (oneCrystal){
        res.status(200).json(oneCrystal)
    } else {
        res.status(404).json({error: "Crystal Not Found!!"})
    }
});

crystals.post("/", checkName, checkColor, async (req, res)=>{
    const newCrystal = await createCrystal(req.body)
    if (newCrystal){
        res.status(200).json(newCrystal)
    } else {
        res.status(400).json({error: "Crystal Not Added!"})
    }
});

module.exports = crystals;