mkdir dir_name // make a directory
cd dir_name // change into directory
nmp init -y //node package manager initilize yes, creates package.json file
npm install express body-parser express-session mongoose path, ejs --save //list of packages to install
mkdir views // creates views file, comprable to client
touch server.js // creates a server.js file
    var express = require('express'); //require = nodes way of importing
    var app = express(); // returns an express function into app
    var port = 8000; //sets up port 8000 
    var bp = require('body-parser'); // imports body-parser(allows sending of info from front end to backend)
    var path = require('path'); // imports path  - creates paths to file folders
    var session = require('express-session') // imports express session
    app.use(bp.urlencoded()); //
    app.use(express.static(path.join(__dirname,"/client"))); //sets up pathing for static folder
    app.use(session({secret: your_secret_word_here})); // sets your secret word for session
    app.set("views", path.join(__dirname, "/views"));
    app.set("view engine", "ejs");

    app.get("/", function(req, res){

    });
    // req = request: , res = result: 

    app.listen(port, function(){
        console.log("listening")
    });
