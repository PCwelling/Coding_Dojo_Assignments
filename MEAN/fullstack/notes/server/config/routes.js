var notes = require('./../controllers/notesController.js')
console.log(notes)
module.exports = function(app){
    app.post('/addNote', function(req,res){
    console.log("in routes");
    notes.addNote(req, res);
    })
}