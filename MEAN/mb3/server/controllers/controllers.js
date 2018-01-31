var mongoose = require('mongoose');
var User = mongoose.model('User');

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

    showUsers: function(req,res){
        User.find({},(function(err,users){
            res.json(users)
        }))
    },
    
    addFriend: function(req,res){
        //console.log(req.session.user)
        //console.log('user id',req.session.user._id)
        //console.log('passed params',req.params.id)
        User.findOneAndUpdate({_id: req.session.user._id},{$set:{_friends: req.params.id}},function(err, user){
            user.save(function(err){
                //console.log('friends',req.session.user._friends)
                //console.log('user',user)
                res.json(user)
            })
        })
    },

    deleteFriend: function(req,res){
        User.remove({_id: req.params.id}).exec(function(err){
            //console.log('delete it')
            res.json('done')
        })
    },

    showProfile: function(req, res){
        User.findOne({id: req.params.id}, function(err, user){
            res.json(user)
        })
    }




}