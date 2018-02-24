var express =  require("express");
var app =  express();
var port = 3000;

// Body parser is a middleware gets the Body from the HTTP request in JSON format
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


// need Express to execute
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

// connect to the Database
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");


// create Collection
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})
var User = mongoose.model("User", nameSchema);

app.post("/addName", function(req, res){
    var myData = new User(req.body);
    myData.save()
    .then(function(data){
        res.send("saved Successfull")
    })
    .catch( function(err) {
        res.send("Undavle tp save");
    })
});

//Run on PORT
app.listen(port, function(){
    console.log("Server Listening on Port "+port);
})