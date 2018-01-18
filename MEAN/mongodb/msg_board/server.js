// DOJO MESSAGE BOARD ASSIGNMENT

// BASIC SETUP
var express = require("express");
var app = express();
var port = 8000;
var bp = require("body-parser");
var path = require("path");
var session = require("express-session");
app.use(bp.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"/views")));
app.use(session({secret : "your_secret_word_here"}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// BD OPERATIONS
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/msg_board");

var UserSchema = new mongoose.Schema({
    name: { type: String, required : true, minlength: 4},
    message: { type: String, required: true, minlength: 4},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
},{usePushEach: true});
mongoose.model("User", UserSchema);
var User = mongoose.model("User");

var CommentSchema = new mongoose.Schema({
    name: { type: String, required : true, minlength: 4},
    comment: { type: String, required: true, minlength: 4},
    _user: {type: Schema.Types.ObjectId, ref: "User"}
},{usePushEach: true});
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

// ROUTES
app.get("/", function(req, res){
    User.find({}).lean().populate("comments").exec(function(err, users){
        console.log(users)
        res.render("main", {users : users})
    });
});

app.post("/newmsg", function(req, res){
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, message: req.body.message});
    user.save(function(err){
        if(err){
            res.render("main", {errors: user.errors})
            console.log("something went wrong");
        } else {
            console.log("successfully added a message");
            res.redirect("/")            
        }
    });
});

app.post("/comment/:id", function(req, res){
    // console.log("POST DATA", req.body);
    User.findOne({_id: req.params.id}, function(err, user){
        // console.log(user)
        var comment = new Comment({name: req.body.name, comment: req.body.comment});
        // console.log(comment)
        comment._user = user._id;
        // console.log(comment)
        user.comments.push(comment);
        // console.log(user)
        comment.save(function(err){
            // console.log("i saved my comment")
            user.save(function(err){
                console.log(err)
                if(err){
                    console.log("something went wrong");                
                    // res.redirect("/")
                } else {
                    console.log("successfully added a comment");    
                    res.redirect("/")
                }
            });
        });
    });
});

// LAST ITEM BELOW
app.listen(port, function(){
    console.log("listening");
})
