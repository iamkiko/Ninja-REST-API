const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//connect to mongodb
mongoose.connect("mongodb://localhost/ninjago", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));﻿
app.use(bodyParser.json());

//initialize routes
app.use("/api", require("./routes/api"));

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 3000, function(){
  console.log("Houston, we have liftoff");
});
