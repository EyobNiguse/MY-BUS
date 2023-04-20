const mongoose  = require("mongoose");
const busSchema =  new mongoose.Schema({
  plateNumber:{
    type:String,
    required:true
  },
  fleetKey:{
    typr:String,
    required:true
  },
  locationLat:{
    type:String
  },
  locationLng:{
    type:String   
  }
});
module.exports = monoose.model("Bus",busSchema);