var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    QuestionSchema = new Schema({
        question: String,
        description: String,
        answers:{
            type : Number,
            default : 0
        },
        _answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }]

    }, { usePushEach: true, })
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    AnswerSchema = new Schema({
        content: String,
        userName: String,
        description: {
            type: String,
            default: ""
        },
        Likes: {
            type: Number,
            default: 0
        },
        _question: [{ type: Schema.Types.ObjectId, ref: "Question" }]

    }, { usePushEach: true, })
mongoose.model('Answer', AnswerSchema);
mongoose.model('Question', QuestionSchema);