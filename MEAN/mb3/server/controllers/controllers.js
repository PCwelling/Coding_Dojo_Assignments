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
                User.findOne({name: req.body.name}).populate({path: '_friends'}).exec(function(err, user){
                req.session.user = user;
                req.session.save();
                res.json({user: req.session.user});
                })
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
        User.findOneAndUpdate({_id: req.session.user._id},{$push:{_friends: req.params.id}},function(err, user){
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
    },

    removeFriend: function(req, res){
        // User.findOne({_id: req.session.user._id}, function(err, user){
        //     console.log('before',user)
        // })


        User.update({_id: req.session.user._id}, {$pull: {_friends: req.params.id}}, function(err){
            User.findOne({_id: req.session.user._id}, function(err, user){
                //console.log('after',user)
                res.json(user)
            })
        })
    },
}