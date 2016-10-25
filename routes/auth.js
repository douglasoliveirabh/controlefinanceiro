'use strict'

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');


module.exports = function(app, config) {
    router.post('/', function(req, res, next){
    
        var user = req.body;

        if(!user.username && !user.password){
            res.status(400);
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        }
        else{
            User.findOne({username: user.username})
                .then(function(userdb){
                    if(userdb){
                        if(userdb.password != user.password){
                            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                        }
                        else{
                            var token = jwt.sign(userdb, config.secret, config.jwt.signin);

                            res.json({
                                success: true,
                                message: 'Enjoy your token!',
                                token: token
                            });
                        }
                    }
                    else{
                        res.json({ success: false, message: 'Authentication failed. User not found.' });
                    }
                })
                .catch(function(err){
                    res.send(err);
                });
        }
    });

    return router;
}




//module.exports = router;