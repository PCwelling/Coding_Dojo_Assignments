var express = require('express'); //require = nodes way of importing
var app = express(); // returns an express function into app
var port = 8000; //sets up port 8000 
var bp = require('body-parser'); // imports body-parser(allows sending of info from front end to backend)
var path = require('path'); // imports path  - creates paths to file folders
var session = require('express-session'); // imports express session
app.use(bp.urlencoded()); //
app.use(express.static(path.join(__dirname,"/client"))); //sets up pathing for static folder
app.use(session({secret: "codingdojorocks"})); // sets your secret word for session
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get('/', function(req, res){
    if(req.session.count){
        req.session.count ++
    }
    else{
        req.session.count = 1
    }

    res.render('main', {count:req.session.count})
})

// app.get('/counter', function(req, res){
//     // set the name property of session.

//     console.log(req.session.count);
//     // code to do something here
//     res.redirect('/'); //redirect the user back to the root route
// })

app.get('/plustwo', function(req, res){
    req.session.count += 1
    res.redirect('/');
})
app.get('/reset', function(req, res){
    req.session.count = 0
    res.redirect('/');
})


app.listen(port, function(){
    console.log("listening")
});