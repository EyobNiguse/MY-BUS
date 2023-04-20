const {busSchema,busValidator} = require("../models/Bus");
const {isAdmin, isLoggedIn}  = require("../middleware/auth");
const  express = require("express");
const router = express.Router();
// register a new bus
router.post("/addBus",isLoggedIn,isAdmin,async(req,res)=>{
    const {values,error} = busValidator(req.body);
    if(error) return res.status(400).send(error.messages[0].message);
    let bus = new busSchema();
    bus.plateNumber  = req.body.plateNumber;
    try{
        await bus.save()
    }catch(er){
        return res.status(400).send(er.message);
    }
    return res.status(200).send(bus);
})
// end point for setting loging details for the driver of the bus
router.post("/setFleetKey",isLoggedIn,isAdmin, async (req,res)=>{
   if (req.body.fleetKey == null || req.body.plateNumber == null ){
return res.status(400).send("fleetKey and plateNumber are required")
   }    
   let bus = busSchema.find({plateNumber:req.body.plateNumber})
   if(!bus) return res.status(400).send("bus does noe exist");
   bus.fleetKey = await bcrypt.hash(req.body.fleetKey, 10);
   await bus.save()
   return res.status(200).send("fleet key set");
});
module.exports = router;