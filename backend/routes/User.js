const express = require("express");
const router  = express.Router();
const {isLoggedIn,isAdmin} = require("../middleware/auth"); 
const { userSchema } = require("../models/User");

// add user to fleet 
router.post("/addToFleet",isLoggedIn,isAdmin,async(req,res)=>{
        if(req.body.plateNumber == null || req.body.phoneNumber == null){
            return res.status(400).send("phone number and plateNumber Required");
        }
        let user  = await  userSchema.find({phone:req.body.phoneNumber});
        if (!user) return res.status(400).send("user with this phone is not registered");
        user.assignedTo = req.body.plateNumber;
        await user.save();
        return res.status(200).send("user assigned to fleet");
    });
// get users in a fleet
router.get("/users/:plateNumber",isLoggedIn, async (req,res)=>{
    if (req.body.plateNumber == null){
        return  res.status(400).send("plateNumber is required");
    }
    let users  = await userSchema.find({assignedTo:req.body.plateNumber});
    return res.status(200).json(JSON.parse(users));
})