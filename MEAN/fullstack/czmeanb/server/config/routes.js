var questions = require('../controllers/questions.js');
var path = require("path");
module.exports = function (app) {
    app.post('/add', function(req, res){
        questions.addQuestion(req, res);
    })
    app.get('/grab_all_questions', function(req,res){
        questions.grabAllQuestions(req,res);
    })
    app.post('/grab_all_answers', function(req, res){
        questions.grabAllAnswers(req, res);
    })
    app.post('/find_question', function(req,res){
        questions.findQuestion(req,res);
    })
    app.post('/answer_question', function(req,res){
        questions.answerQuestion(req, res);
    })
    app.post('/add_like', function(req,res){
        questions.addLike(req,res);
    })
    app.post('/login', function (req, res) {
        questions.login(req, res);
    })
    app.get('/dashboard_backend', function (req, res) {
        questions.checkSession(req, res);
    })
    app.get('/logout', function (req, res) {
        questions.clearSession(req, res);
    })
    app.all("**", (request, response) => { response.sendFile(path.resolve("./client/dist/index.html")) });
}