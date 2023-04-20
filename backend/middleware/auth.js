const  jwt = require("jsonwebtoken");
const isAdmin = (req,res,next)=>{
 if (req.user.role == "Admin"){
    next();
 }else{
    return res.status(403).json({"status":403,"ok":false,"response":{"message":"Access Denied "}});
 }
}
const isLoggedIn  = async (req,res,next)=>{
    const authHeader = String(req.headers["authorization"] || "");
    try{
    decoded  = await jwt.verify(authHeader,process.env.SECRET);
    req.user = decoded;
    next()
}catch(e){
   return res.status(400).json({"status":400,"ok":false,"response":{"message":"invalid token"}})
}
}
module.exports = {isLoggedIn,isAdmin};