var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//// User Schema ////
var UserSchema = new Schema({
    name: String,
    _list: [{type: Schema.Types.ObjectId, ref: "List"}]
},
{timestamps: true, usePushEach: true});

mongoose.model('User', UserSchema);

//// List Schema ////
var ListSchema = new Schema({
    title: String,
    desc: String,
    creator: Object,
    _user: [{type: Schema.Types.ObjectId, ref: "User"}],
    status: {type: Boolean, default: false}
},
{timestamps: true, usePushEach: true});

mongoose.model('List', ListSchema);