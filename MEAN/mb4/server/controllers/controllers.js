var mongoose = require('mongoose');
var User = mongoose.model('User');
var Survey = mongoose.model('Survey')

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
                req.session.user = users;
                req.session.save()
                res.json({user: req.session.user})
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

    newSurvey: function(req, res){
        Survey.create({question: req.body.question,
                    option1: req.body.option1,
                    option2: req.body.option2,
                    option3: req.body.option3,
                    option4: req.body.option4,
                    _creator: req.session.user._id}, function(err, survey){
                        res.json({survey: survey})
                    })
    },

    allPolls: function(req, res){
        Survey.find({})
        .populate('_creator')
        .exec(function(err, polls){
            res.json(polls)
        })
    },

    deletePoll: function(req, res){
        Survey.remove({_id: req.params.id}).exec(function(err){
            console.log('deleted from controller')
            res.json('done')
        })
    },

    showPoll: function(req, res){
        Survey.findOne({_id: req.body.id}, function(err, poll){
            res.json(poll);
        })
    }





}