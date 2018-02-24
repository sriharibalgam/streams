var express = require("express");

var app = express();
var port = process.env.PORT || 8000;

app.use('/assets', express.static(__dirname+ "/public")); // Static Files

app.get('/', function (req, res){
    res.send("Node Normal Output"+ req.url)
})
 
app.get("*", function(req, res){
  
    console.log(req.params);
    console.log(req.query);
    res.send("404-Page Not Found. Parameters: "+req.params+ " Query Params "+ req.query)
})


app.listen(port);
