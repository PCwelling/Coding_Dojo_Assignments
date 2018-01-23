var express = require('express'); //require = nodes way of importing
var app = express(); // returns an express function into app
var port = 8000; //sets up port 8000 
var bp = require('body-parser'); // imports body-parser(allows sending of info from front end to backend)
var path = require('path'); // imports path  - creates paths to file folders
var session = require('express-session') // imports express session

app.use(express.static(path.join(__dirname,"/client/dist"))); //sets up pathing for static folder
app.use(session({secret: "your_secret_word_here"})); //, saveUninitialized : true})); // sets your secret word for session
app.use(bp.json()); 

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function(){
    console.log("listening")
});