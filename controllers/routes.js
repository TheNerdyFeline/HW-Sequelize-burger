var db  = require('../models');
var express = require('express');
var router  = express.Router();

// main page load
router.get("/", function(req , res) {
    db.burger.findAll({
    }).then(function(burgers) {
	res.render("index", burgers);
    });
});

// create new burger
router.post("/", function(req, res) {
    db.burger.create({
	burger_name: req.body.burger_name
    }).then(function(data){
	res.json("/");
    }).catch(function(err) {
	res.json(err);
    });

});

// update devour it
router.put("/", function(req, res) {
    db.burger.update({
	where: {id: req.body.id}
    }).then(function(results){
	res.json("/");
    }).catch(function(err){
	res.json(err);
    });

});
