var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');

//Get all users
router.get('/', function(req, res, next){
    User.find()
        .then(function(users){
            res.json(users);
        })
        .catch(function(err){
            res.send(err);
        });
})
.post('/', function(req, res, next){
    var user = req.body;

    if(!user.username || !user.password){
        res.status(400);
        res.json('Bad data for users');
    }
    else{
        var userSave = new User(user);

        userSave.save()
                .then(function(user){    
                    res.json(user);
                })
                .catch(function(err){
                    res.json(err);
                });
    }
});

//Get especific user
router.get('/:id', function(req, res, next){
    User.findOne({_id: new mongoose.Types.ObjectId(req.params.id)}, function(err, user){
        if(err)
            res.send(err);
        res.json(user);
    });
});

module.exports = router;