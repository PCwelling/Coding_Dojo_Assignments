var mongoose = require('mongoose');
var User = mongoose.model('User');
var Trivia = mongoose.model('Trivia')
var Game = mongoose.model('Game')

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

    home: (req, res)=>{
        res.redirect('/home')
    },

    //// addquestion ////
    newQuestion: function(req,res){
        Trivia.create({question: req.body.question, correct: req.body.correct, fake1: req.body.fake1, fake2: req.body.fake2}, function(err, trivia){
            res.json({trivia: trivia});
        });
    },

    //// playgame  original ////
    newGame: function(req,res){
        Trivia.find({}, function(err, triviaFound){
            Game.create({}, function(err, gameCreated){
                // console.log('________________')
                // console.log(err)
                // console.log(gameCreated)
                // console.log('________________')
                var count = 0;
                while(count < 3){
                    var randidx = Math.ceil(Math.random()* triviaFound.length)-1;
                    gameCreated['question' + (count+1)] = triviaFound[randidx];
                    count ++
                }
                console.log(req.session)
                gameCreated.player = req.session.user;
                gameCreated.save(function(err,gameSaved){
                    // console.log("##############")
                    // console.log('gameSaved data returning',gameSaved)
                    res.json(gameSaved)
                })
            })
        })
        
    },


}