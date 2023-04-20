const Joi = require("joi");
const mongoose  = require("mongoose");
const busSchema =  new mongoose.Schema({
  plateNumber:{
    type:String,
    required:true
  },
  fleetKey:{
    type:String,
    required:true
  },
  socketID:{
    type:String
  },
  locationLat:{
    type:String
  },
  locationLng:{
    type:String   
  }
});
function validate(bus){
    const busS = Joi.object().keys({
        plateNumber:String.required()
    });
    return busS.validate(bus);
}
module.exports.busSchema = monoose.model("Bus",busSchema);
module.exports.validateBus  =  validate;