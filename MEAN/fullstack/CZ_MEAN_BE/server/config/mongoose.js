let mongoose = require("mongoose"),
    path = require("path"),
    fs = require("fs"),
    mp = path.join(__dirname, './../models');

mongoose.connect('mongodb://localhost/Questions');

fs.readdirSync(mp).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(mp + '/' + file)
    }
})