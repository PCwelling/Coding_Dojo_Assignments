var express = require('express');
var app = express();
var port = 8000;
var bp = require('body-parser');
var path = require('path');
var session = require('express-session');
app.use(bp.json());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(session({secret: 'your-word-here'}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port, function(){
    console.log('listening on port 8000');
})