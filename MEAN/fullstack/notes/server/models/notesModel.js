var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    noteText: String
})

mongoose.model('Note', NoteSchema);