var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//// User Schema ////
var UserSchema = new Schema({
    name: String,
    _friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
},
{timestamps: true});

mongoose.model('User', UserSchema);