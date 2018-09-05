const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

//get a list of ninjas from the db
router.get("/ninjas", function(req, res){
    res.send({type: "GET"});
});

//add a new ninja to db
router.post("/ninjas", function(req, res, next){
    Ninja.create(req.body).then(function(ninja){ //create new instance of ninja locally and then save to db
      res.send(ninja);
    }).catch(next);
});

//update a new ninja in db
router.put("/ninjas/:id", function(req, res){
    res.send({type: "PUT"});
});

//delete a ninja from db
router.delete("/ninjas/:id", function(req, res){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
      res.send(ninja);
    });
});

module.exports = router;
