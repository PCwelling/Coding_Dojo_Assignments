var mongoose = require('mongoose');
var User = mongoose.model('User');
var List = mongoose.model('List')

module.exports = {

    login: function(req, res){
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

    checkSession: function(req,res){
        if(req.session.user == undefined){
            return res.json({user: null})
        }
        return res.json({user: req.session.user})
    },

    logout: (req, res)=>{
        req.session.destroy();
        res.redirect('/');
    },

    newItem: function(req,res){
        User.findOne({name:req.session.user.name}, function(err,user){
            List.create({title: req.body.title, desc: req.body.desc, _user: req.body.users , creator: user.name, status: false}, function(err, list){
            user.list.push((list._id));
            user.save();
            res.json({list: list});
            });
        });
    },

    showUsers: function(req,res){
        User.find({},(function(err,users){
            res.json(users)
        }))
    },

    showItems: function(req,res){
        List.find({}, function(err,list){
            res.json(list)
        })
    },





}