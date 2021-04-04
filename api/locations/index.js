const Location = require('../../models/locations');

module.exports={
    updateLocation: async(req,res) => {
        city=req.body.city;
        phoneNumber=req.body.phoneNumber;
        pincode=req.body.pincode;
        email = res.locals.email;
        if(!city || !phoneNumber || !pincode){
            return res.status(400)
        }

        new Location({
            "city":city,
            "phoneNumber":phoneNumber,
            "pincode":pincode,
            "email":email,
        }).save(function(err,result){
            if(err) throw err;
            if(result){
                return res.status(200).send({message:"Location Added"});
            }
        })
    }
}
