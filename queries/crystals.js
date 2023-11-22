const db = require("../db/dbConfig.js")

const getAllCrystals = async()=>{
    try {
        const allCrystals = await db.any("SELECT * FROM crystals ORDER BY name ASC")
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

const deleteCrystal = async(id)=>{
    try {
       const deletedCrystal = await db.one("DELETE FROM crystals WHERE id = $1 RETURNING *", id) 
       return deletedCrystal
    } catch (error) {
        return error
    }
};

const updateCrystal = async (id, crystal)=>{
    try {
        const updatedCrystal = await db.one("UPDATE crystals SET name=$1, color=$2, hardness=$3, rarity=$4, can_be_water_cleansed=$5, healing_effects=$6, collected_on=$7, favorite=$8 WHERE id=$9 RETURNING *", 
        [crystal.name, crystal.color, crystal.hardness, crystal.rarity, crystal.can_be_water_cleansed, crystal.healing_effects, crystal.collected_on, crystal.favorite, id])
        return updatedCrystal
    } catch (error) {
        return error
    }
};




module.exports = {
    getAllCrystals,
    getCrystal,
    createCrystal, 
    deleteCrystal,
    updateCrystal,
};