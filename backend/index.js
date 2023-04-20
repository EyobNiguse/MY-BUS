const express  =  require("express");
const app =  express();
const bodyParser = require("body-parser");
const auth = require("./routes/auth.js");
const Bus = require("./routes/Bus.js");
//  location update occurs in socekt io based on
//  even calls made from the client and driver app


app.use(express.json());