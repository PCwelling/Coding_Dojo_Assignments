var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//// User Schema ////
var UserSchema = new Schema({
    name: String,
},
{timestamps: true});

mongoose.model('User', UserSchema);

//// Question Schema ////
var TriviaSchema = new Schema({
    question: String,
    correct: String,
    fake1: String,
    fake2: String,
},
{timestamps: true});

mongoose.model('Trivia', TriviaSchema);

// Game Schema ////

var GameSchema = new Schema({
    player: {type: String, default: ''},
    question1: {type: Object, default: ''},
    question2: {type: Object, default: ''},
    question3: {type: Object, default: ''}
},
{timestamps: true});

mongoose.model('Game', GameSchema);