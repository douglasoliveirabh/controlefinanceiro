var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = mongoose.model('User', new Schema({ 
                                                username: String, 
                                                password: String, 
                                                admin: Boolean,
                                                created_date: Date 
                                            }));


// set up a mongoose model and pass it using module.exports
module.exports = User;