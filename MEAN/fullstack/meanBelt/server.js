var express = require('express');
var app = express();
var port = 8000;
var bp = require('body-parser');
var path = require('path');
var session = require('express-session');

app.use(bp.json());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(session({secret: 'your-secret-word-here', saveUninitialized: true}));

////comment out the below lines until mongoose.js and route.js files are built////
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

////place nothing below this line of code////
app.listen(port, function(){
    console.log('listening on port ' + port);
})
