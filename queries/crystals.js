const db = require("../db/dbConfig.js")

const getAllCrystals = async()=>{
    try {
        const allCrystals = await db.any("SELECT * FROM crystals")
        return allCrystals
    } catch (error) {
        return error
    }
};

const getCrystal = async(id)=>{
    try {
        const oneCrystal = await db.one("SELECT * FROM crystals WHERE id=$1", id)
        return oneCrystal
    } catch (error) {
        return(error)
    }
};

const createCrystal = async (crystal)=>{
    try {
        const newCrystal = await db.one(
            "INSERT INTO crystals (name, color, hardness, rarity, can_be_water_cleansed, healing_effects, collected_on, favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [crystal.name, crystal.color, crystal.hardness, crystal.rarity, crystal.can_be_water_cleansed, crystal.healing_effects, crystal.collected_on, crystal.favorite]
        )
        return newCrystal
    } catch (error) {
        return error
    }
};





module.exports = {
    getAllCrystals,
    getCrystal,
    createCrystal
};