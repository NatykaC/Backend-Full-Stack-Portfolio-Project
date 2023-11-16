const db = require("../db/dbConfig.js")

const getAllCrystals = async()=>{
    try {
        const allCrystals = await db.any("SELECT * FROM crystals")
        return allCrystals
    } catch (error) {
        return error
    }
};






module.exports = {getAllCrystals};