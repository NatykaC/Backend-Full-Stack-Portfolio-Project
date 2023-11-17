const checkName = (req, res, next)=>{
    if (req.body.name){
        return next()
    } else {
        res.status(400).json({error: "Name is required!"})
    }
};

const checkBooleans = (req, res, next)=>{
    const fav = req.body.favorite
    const waterCleansed = req.body.can_be_water_cleansed
    if ((fav == "true" || fav == "false" || fav == undefined || typeof fav == "boolean") 
    & (waterCleansed == "true" || waterCleansed == "false" || waterCleansed == undefined || typeof waterCleansed == "boolean")){
    } else {
        res.status(400).json({error: "favorite and can_be_water_cleansed must be a boolean value"})
    }
};

const checkColor = (req, res, next)=>{
    if (req.body.color){
        return next()
    } else {
        res.status(400).json({error: "Color is required!"})
    }
};



module.exports = {
    checkName,
    checkBooleans, 
    checkColor,
}