const mongoose = require("mongoose");
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
    locationLat:{
        type:String
    },
    locationLng:{
        type:String   
      }
});

module.exports = mongoose.model("User", userSchema);
