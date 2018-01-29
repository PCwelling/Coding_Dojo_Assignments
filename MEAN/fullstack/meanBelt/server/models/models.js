var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//// User Schema ////
var UserSchema = new Schema({
    name: String,
},
{timestamps: true});

mongoose.model('User', UserSchema);

//// List Schema ////
var ListSchema = new Schema({
    title: String,
    desc: String,
    tagged: String,
    _poster: [{types: Schema.Types.ObjectId,}],
    status: {type: Boolean, default: false}
},
{timestamps: true});

mongoose.model('List', ListSchema);