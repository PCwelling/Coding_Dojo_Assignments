var user = require('./../controllers/controllers');
var path = require('path');

module.exports = function(app){

    app.post('/login', function(req, res){
        user.login(req, res);
        console.log('in routes')
    })

    app.get('/logout', function(req,res){
        user.logout(req, res);
    })


    app.get('/session', function(req, res){
        user.checkSession(req, res);
    })

    app.get('/show', function(req,res){
        user.showUsers(req,res);
    })








}