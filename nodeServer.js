var http = require('http');


http.createServer(function(req, res) {
    if(req.url === '/' ){
        res.writeHead(200, { 'Content-type': 'text/plain'});
        res.send("Hello Node Server");
    } else {
        res.writeHead(404);
        res.end("Nothing Found "+ req.url);
    }
    
}).listen(1200, '127.0.0.1', 800, function(err){
    console.log("Connection Error", err)
})