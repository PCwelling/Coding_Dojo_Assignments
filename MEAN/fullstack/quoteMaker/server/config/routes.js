var users = require('./../controllers/userControllers');
// var quotes = require('./../controlers/userControllers');
var path = require('path')

module.exports = function(app){

    app.post('/login', function(req, res){
        users.login(req, res)
    })

    app.get('/session', function(req, res){
        users.checkSession(req, res);
    })

    app.get('/logout', function(req,res){
        users.logout(req, res);
    })

    app.post('/addQuote', function(req,res){
        users.addQuote(req, res);
    })
    
    app.get('/show', function(req,res){
        users.showQuotes(req,res);
    })
    app.get('/onDelete/:id', function(req,res){
        users.onDelete(req,res)
    })
    app.get('/onLike/:id', function(req,res){
        users.onLike(req,res)
    })
app.all('**', (req, res)=> {res.sendFile(path.resolve('./client/dist/index.html'))});

}