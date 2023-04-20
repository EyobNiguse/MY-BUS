const mongoose = require("mongoose");
const Joi = require("joi");
const { join } = require("lodash");
const userSchema = new mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Admin","Client"]
    },
    fullName:{
        type:String,
        required:true
    },
    assignedTo:{
        type:String
    }
    ,


    socketID:{
        type:String
    }
    ,
    locationLat:{
        type:String
    },
    locationLng:{
        type:String   
      }
});
function validate(user){
    const userSchema = Joi.object().keys(
        {
            fullname:Joi.string().required(),
            phone: Joi.string().required(),
            role:Joi.string().require()
        }
    ) ;
return  userSchema.validate();
}
module.exports.userSchema = mongoose.model("User", userSchema);
module.exports.validateUser =  validate;
