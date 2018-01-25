var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quote = mongoose.model('Quote');

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

    addQuote: function(req,res){
        Quote.create({quote: req.body.quote, quote_by: req.session.user.name }, function(err, quote){
            res.json({quote: quote});
        });
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

    showQuotes: function(req,res){
        Quote.find({},(function(err,quotes){
            res.json(quotes)
        }))
    },

    onDelete: function(req,res){
        Quote.remove({_id: req.params.id}).exec(function(err){
            console.log('delete it')
        })
    },
    onLike: function(req,res){
        Quote.findOne({_id: req.params.id}).exec(function(err, quote){
            quote.likes++;
            quote.save(function(err){
                res.json(quote)
            })
        })

    }


}