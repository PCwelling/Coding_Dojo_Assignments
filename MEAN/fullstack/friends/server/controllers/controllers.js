var mongoose = require('mongoose');
var User = mongoose.model("User")

module.exports ={

    login: function(req, res){
        console.log('in controler')
        User.find({name: req.body.name}, function(err, users){
            if(users.length < 1){
                User.create({name: req.body.name}, function(err, user){
                    req.session.user = user
                    req.session.save()
                    res.json({user: user})
                })
            }else{
                req.session.user = users[0];
                req.session.save()
                res.json({user: users[0]})
            }
        })
    },

    logout: (req, res)=>{
        req.session.destroy();
        res.redirect('/');
    },

    checkSession: function(req,res){
        if(req.session.user == undefined){
            return res.json({user: null})
        }
        return res.json({user: req.session.user})
    },

    showUsers: function(req,res){
        User.find({},(function(err,users){
            res.json(users)
        }))
    },







}