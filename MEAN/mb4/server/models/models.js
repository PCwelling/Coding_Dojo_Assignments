var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//// User Schema ////
var UserSchema = new Schema({
    name: {type: String, default: ''},
    _surveys: [{type: Schema.Types.ObjectId, ref: 'Survey'}],
},
{timestamps: true});

mongoose.model('User', UserSchema);

//// Survey Schems ////
var SurveySchema = new Schema({
    question: {type: String, default: ''},
    option1: {type: String, default: ''},
    option2: {type: String, default: ''},
    option3: {type: String, default: ''},
    option4: {type: String, default: ''},
    likeoption1: {type: Number, default: 0},
    likeoption2: {type: Number, default: 0},
    likeoption3: {type: Number, default: 0},
    likeoption4: {type: Number, default: 0},
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},    
},
{timestamps: true});

mongoose.model('Survey', SurveySchema);

