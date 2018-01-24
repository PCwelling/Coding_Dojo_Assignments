var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    addNote: function(req, res){
        console.log("*******************")
        Note.find({noteText: req.body.noteText}, function(err, notes){
            if(notes.length < 1){
                Note.create({noteText: req.body.noteText}, function(err, note){
                    console.log(err);
                    console.log("created new note")
                    req.session.note = note;
                    res.json({note: req.session.note});
                })
             }else{
                 console.log("I found a note")
                 req.session.note = notes[0];
                 res.json({note: req.session.note});  
             }           
        })
    }
}