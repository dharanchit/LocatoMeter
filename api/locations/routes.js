const express = require('express')
const {updateLocation} = require('./index')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const getEmailFromToken = (req,res,next) => {
    const bearer = req.headers["authorization"];
    if(bearer !== undefined){
        const token = bearer && bearer.split(" ")[1];
        var decode = jwt.verify(token, process.env.ACCESS_TOKEN);
        const {emailAddress} = decode;
        res.locals.email = emailAddress;
        next();
    } else {
        res.send(406);
        req.connection.destroy();
    }
}


module.exports = () => {
    const routes = express.Router();
    routes.post("/",getEmailFromToken,(req,res) =>{
        return updateLocation(req,res);
    })

    return routes;
}