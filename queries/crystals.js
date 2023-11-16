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






module.exports = {
    getAllCrystals,
    getCrystal
};