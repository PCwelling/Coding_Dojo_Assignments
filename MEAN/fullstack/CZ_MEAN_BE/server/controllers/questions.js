var mongoose = require("mongoose"),
    Question = mongoose.model('Question');
Answer = mongoose.model('Answer')
module.exports = {
    addQuestion: function (req, res) {
        Question.create({ question: req.body.question, description: req.body.description }, function (err, question) {
            res.json(question);
        })
    },
    grabAllQuestions: function (req, res) {
        Question.find({}, function (err, questions) {
            res.json(questions);
        })
    },
    grabAllAnswers: function (req, res) {
        Question.findById({ _id: req.body.questionId }).populate({ path: '_answers', options: { sort: { 'Likes': -1 } } }).exec(function (err, question) {
            res.json(question);
        })
    },
    findQuestion: function (req, res) {
        Question.findById(req.body.questionId, function (err, question) {
            return res.json(question);
        })
    },
    answerQuestion: function (req, res) {
        Question.findByIdAndUpdate({ _id: req.body.questionId }, { $inc: { answers: 1 } }, function (err, question) {
            Answer.create({ content: req.body.answer.answer, description: req.body.answer.description, userName: req.session.user }, function (err, answer) {
                question._answers.push(answer._id);
                answer._question.push(question._id);
                answer.save(function (err) {
                    question.save(function (err) {
                        res.json(answer);
                    })
                })
            })
        })
    },
    addLike: function (req, res) {
        Answer.findByIdAndUpdate({ _id: req.body.answerId }, { $inc: { Likes: 1 } }, function (err, answer) {
            res.json(answer);
        })
    },
    login: function (req, res) {
        req.session.user = req.body.name;
        return res.json({ user: req.session.user });
    },
    checkSession: function (req, res) {
        if (!req.session.user) {
            return res.json({ user: null });
        } else {
            return res.json({ user: req.session.user });
        }
    },
    clearSession: function (req, res) {
        req.session.destroy();
        return res.redirect('/');
    }
}