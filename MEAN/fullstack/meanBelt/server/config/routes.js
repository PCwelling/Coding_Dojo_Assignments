var user = require('..controllers/controllers.js');
var path = require('path');

module.exports = function(app){

    app.post('/login', function(req, res){
        user.login(req, res);
    })








}