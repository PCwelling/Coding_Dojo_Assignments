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


    app.post('/newitem', function(req,res){
        user.newItem(req, res);
    })

    app.get('/showuser', function(req,res){
        user.showUsers(req,res);
    })
    app.get('/showitems', function(req, res){
        user.showItems(req,res);
    })


    app.all('**', (req, res)=> {res.sendFile(path.resolve('./client/dist/index.html'))});
}