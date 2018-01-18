var express = require("express");
var app = express();
var port = 8000;
var bp = require("body-parser");
var path = require("path");
var session = require("express-session");
app.use(bp.json());
app.use(express.static(path.join(__dirname,  "/client")));
app.use(session({secret : "your_secret_word_here"}));

require("./server/config/mongoose.js"); /// this come before routes
require("./server/config/routes.js")(app);

app.listen(port, function(){
    console.log("listening");
})