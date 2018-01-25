var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//////User Schema////////
var UserSchema = new Schema({
    name: String,
},
{timestamps: true});

mongoose.model('User', UserSchema);

///////Quote Schema//////
var QuoteSchema = new Schema({
    quote: String,
    likes: {type: Number, default:0},
    quote_by: String
},
{timestamps: true});

mongoose.model('Quote', QuoteSchema);