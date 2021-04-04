const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const user = require('./models/user');
const { Db } = require('mongodb');

require('dotenv').config();

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.pusc3.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => console.log("Connected"));

app.post("/signup", async (req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const isTeacher = req.body.isTeacher;

    const emailExists = await user.findOne({email:req.body.email});
    const userNameExists = await user.findOne({username:req.body.username});
    
    if(userNameExists){
        return res.status(400).json({"error":"Username Exists"});
    }

    if(emailExists){
        return res.status(400).json({"error":"Email already exists"});
    }

    if(!email || !password || !username){
        return res.status(500);
    }
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        var saveDate = new user({
            'username':username,
            'email':email,
            'password': hashedPassword,
            'isTeacher':isTeacher,
        }).save(function(err,result){
            if(err) throw err;
            if(result){
                const payload = {emailAddress:email};
                jwt.sign(payload,process.env.ACCESS_TOKEN,(err,token) => {
                    if(err){
                        return res.status(404).send({message:"Error"})
                    }
                    return res.status(200).json({token:token});
                })
            }
        })

    } catch(err){
        return res.status(404).send("ERROR ENCYPTING");
    }
})

app.post("/login",async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    try{
        const {password:hashedPassword} = await user.findOne({email});
        const comparePassword = await bcrypt.compare(password,hashedPassword);
        if(comparePassword){
            let payload = {emailAddress:email};
            jwt.sign(payload,process.env.ACCESS_TOKEN,(err,token) => {
                if(err) return res.status(500);
                return res.status(200).json({token:token})
            })
        }
    } catch (err){
        console.log(err);
    }
})

const routes = require('./routes');
routes(app);

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`App listening on port ${PORT}`);
})

