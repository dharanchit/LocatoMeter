const user = require('../../models/user');
const Location = require('../../models/locations');

module.exports ={
    listUser: async (req,res) => {
        let isTeacher = req.query.isTeacher;
        let allUsers = [];
        if(isTeacher){
            const users = await user.find({isTeacher:isTeacher});
            return res.status(200).send(users);
        }
        const users = await user.find();
        users.map(i => allUsers.push(i));
        return res.status(200).send(allUsers);
    },
    deleteUser:async(req,res) => {
        let username = req.body.username;
        try{
            if(user.find({username:username})){
                const result = await user.deleteOne({username:username});
                return res.status(200).send({message:"User Deleted"});
            } else {
                return res.status(400).send({message:"User Not Found"});
            }
        } catch(err){
            return res.status(500).send({message:"Something went wrong"});
        }
    },
    listUserByEmail: async(req,res) => {
        let email = req.body.email;
        let arr = [];
        if(user.find({email:email}) && Location.find({email:email})){
            const userData = await user.find({email:email});
            const LocationData = await Location.find({email:email});
            arr.push(userData,LocationData);
            return res.status(200).send(arr);
        } else {
            return res.status(400).send({message:"Problem Occured"});
        }
    }
}