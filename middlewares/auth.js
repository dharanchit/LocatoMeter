const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifyJWT = (req,res,next) => {
    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1]
    if(token == null) return res.status(401);

    jwt.verify(token,process.env.ACCESS_TOKEN,(err,decode) => {
        if(err){
            return res.status(401).send({message:"User Not Authorized"})
        }
        req.userId = decode;
        console.log(decode);
        next();
    })
}

module.exports = verifyJWT;