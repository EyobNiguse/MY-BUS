const  jwt = require("jsonwebtoken");
const _ = require("lodash");
const express = require("express");
const router  = express.Router();
const {userSchema,validateUser }= require('../models/User');
const bcrypt  = require('bcrypt');

//  register a user 
router.post("/",async(req,res)=>{
   const{value , error} = validateUser(req.body);
   if(err) return res.status(400).send(error.message[0].message);
   const user = new  userSchema({
        fullName:req.body.fullName,
        phone:req.body.phone,
        role:req.body.role,
   });
   const pass = await bcrypt.hash(req.body.password,10);
   user.password = pass;
   try{
    await user.save();
   }catch(ex){
    return res.status(400).send("user already registered");
   }
   token = await jwt.sign(_.pick(user,['role','fullName','phone']),process.env.SECRET);
   return res.status(200).send(token);
});
// login a user
router.post("/login",async(req,res)=>{
    if (req.body.phone == "" || req.body.password == "" ) return res.status(400).json({"status":400,"ok":false,"response":{"message":"phone and password are required"}});
    const user  =  await  userSchema.find({phone:req.body.phone});
    if(!user) return res.status(400).send("invalid phone or password");
    result = await  bcrypt.compare(req.body.password,user.password);
    if(result){
        token  = await jwt.sign(_.pick(user,['fullName','phone','role']),process.env.SECRET);
        return res.status(200).send(token);
    }
    return res.status(401).send("invalid phone or password");
});
module.exports = router;