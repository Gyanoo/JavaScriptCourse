var http = require("http");
var url = require("url");
var fs = require("fs");
var file = 'site.html';

const address = "http://worldtimeapi.org/api/timezone/";
let result = "";

http.createServer(function (request, response) {
  console.log("--------------------------------------");
  console.log("The relative URL of the current request: " + request.url + "\n");
  var url_parts = url.parse(request.url, true);  // parsing (relative) URL

  //Compare the relative URL
  switch (url_parts.pathname) {

    case '/':
        fs.stat(file, function (err, stats) {
            if (err == null) { // If the file exists
            fs.readFile(file, function (err, data) { // Read it content
                response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                response.write(data);   // Send the content to the web browser
                response.end();
                });
            }
            else { // If the file does not exists
            response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            response.write('The ' + file + ' file does not exist');
            response.end();
            } //else
        }); //fs.stat
        break;
    // if relative URL is '/' then send, to a browser,
    // the contents of a file (an HTML document) - its name contains the 'file' variable
    case '/submit':
        var text = decodeURIComponent(request.url);
        var cutter = text.split('?');
        cutter = cutter[1].split("=");
        let checkUrl = address + cutter[1];
        console.log(checkUrl);
        var result = "";
        http.get(checkUrl, res => {
            res.setEncoding("utf8");
            var body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                body = JSON.parse(body);
                console.log(body.datetime)
                response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                response.write("aktualna data w "+ cutter[1] + " to: " + body.datetime);   // Send the content to the web browser
                response.end();
            });
        });

        break;
  } //switch
}).listen(8080);
console.log("The server was started on port 8080");
console.log("To end the server, press 'CTRL + C'");