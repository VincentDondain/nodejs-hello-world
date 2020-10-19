var http = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

var server = http.createServer(options, function(request, response) {
    console.log(request.method + " " + request.url);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<html><body><form method='GET'><input name='text'></form></body></html>");

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
