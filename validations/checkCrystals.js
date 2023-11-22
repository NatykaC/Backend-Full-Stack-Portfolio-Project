const checkName = (req, res, next)=>{
    if (req.body.name){
        return next()
    } else {
        res.status(400).json({error: "Name is required!"})
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
    checkColor
}