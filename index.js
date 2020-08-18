var http = require('http');

var server = http.createServer(function(request, response) {
    console.log(request.method + " " + request.url);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<html><body><form method='GET'><input name='text'></form></body></html>");

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
