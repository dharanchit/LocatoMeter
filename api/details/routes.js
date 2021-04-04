const express = require('express')
const {listUser,deleteUser,listUserByEmail} = require('./index')

module.exports = () => {
    const routes = express.Router();
    routes.get("/",(req,res) => {
        return listUser(req,res);
    })
    routes.get("/email",(req,res) => {
        return listUserByEmail(req,res);
    })
    routes.delete("/",(req,res) => {
        return deleteUser(req,res);
    })
    return routes;
}