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

    app.get('/showuser', function(req,res){
        user.showUsers(req,res);
    })

    app.get('/addfriend/:id', function(req,res){
        user.addFriend(req, res)
    })

    app.get('/deletefriend/:id', function(req,res){
        user.deleteFriend(req,res)
    })

    app.get('/showprofile/:id', function(req, res){
        user.showProfile(req, res)
    })
    app.get('/removefriend/:id', function(req, res){
        user.removeFriend(req, res)
    })
    

    app.all('**', (req, res)=> {res.sendFile(path.resolve('./client/dist/index.html'))});
}