var express = require('express'); //require = nodes way of importing
var app = express(); // returns an express function into app
var port = 8000; //sets up port 8000 
var bp = require('body-parser'); // imports body-parser(allows sending of info from front end to backend)
var path = require('path'); // imports path  - creates paths to file folders
var session = require('express-session') // imports express session
app.use(bp.urlencoded()); //
app.use(express.static(path.join(__dirname,"/views"))); //sets up pathing for static folder, can use client also
app.use(session({secret: "your_secret_word_here"})); // sets your secret word for session
app.set("views", path.join(__dirname, "/views")); // can use views or client
app.set("view engine", "ejs");

app.get("/", function(req, res){
    return res.render('index')
});
// req = request: , res = result: 

app.listen(port, function(){
    console.log("listening")
});