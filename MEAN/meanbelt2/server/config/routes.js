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
    app.get('/home', function(req,res){
        user.home(req,res);
    })

    app.post('/newquestion', function(req, res){
        user.newQuestion(req,res);
    })

    app.get('/newgame', function(req, res){
        user.newGame(req, res);
    })



    app.all('**', (req, res)=> {res.sendFile(path.resolve('./client/dist/index.html'))});
}