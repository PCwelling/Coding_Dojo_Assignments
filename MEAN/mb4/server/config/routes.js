var user = require('./../controllers/controllers.js');
var path = require('path');

module.exports = function(app){

    app.post('/login', function(req, res){
        user.login(req, res);
    })

    app.get('/session', function(req, res){
        user.checkSession(req, res);
    })

    app.get('/logout', function(req,res){
        user.logout(req, res);
    })
    app.post('/newsurvey', function(req, res){
        user.newSurvey(req,res);
    })
    app.get('/allpolls', function(req,res){
        user.allPolls(req, res);
    })
    app.get('/deletepoll/:id', function(req, res){
        user.deletePoll(req, res);
    })
    app.post('/showpoll', function(req, res){
        user.showPoll(req,res);
    })


    app.all('**', (req, res)=> {res.sendFile(path.resolve('./client/dist/index.html'))});
}