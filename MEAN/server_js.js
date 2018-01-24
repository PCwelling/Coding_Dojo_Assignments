var express = require('express'); //require = nodes way of importing
var app = express(); // returns an express function into app
var port = 8000; //sets up port 8000 
var bp = require('body-parser'); // imports body-parser(allows sending of info from front end to backend)
var path = require('path'); // imports path  - creates paths to file folders
var session = require('express-session') // imports express session
app.use(bp.urlencoded()); // chnages to app.use(bp.json()); when using angular
app.use(express.static(path.join(__dirname,"/client"))); //sets up pathing for static folder
app.use(session({secret: your_secret_word_here})); // sets your secret word for session
app.set("views", path.join(__dirname, "/views")); // not included when using angular
app.set("view engine", "ejs"); // not included when using angular

// not included when using angular
app.get("/", function(req, res){

});
// req = request: , res = result: 


// include these when running full mean 
//require("./server/config/mongoose.js");
//require("./server/config/routes.js")(app);

app.listen(port, function(){
    console.log("listening")
});
