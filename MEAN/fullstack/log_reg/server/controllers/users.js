var mongoose = require('mongoose');
var User = mongoose.model("User");

module.exports = {
    login: function(req, res){
       User.find({name: req.body.name}, function(err, users){
            if(users.length < 1){
               User.create({name: req.body.name}, function(err, user){
                   console.log(err);
                   console.log("created new user")
                   req.session.user = user;
                   res.json({name: req.session.user});
               })
            }else{
                console.log("i found a user")
                req.session.user = users[0];
                res.json({name: req.session.user});  
            }
        })
    }
}