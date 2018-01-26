var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    _friends: [{types: Schema.Types.ObjectId}]
})

mongoose.model('User', UserSchema)