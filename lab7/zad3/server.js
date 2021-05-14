var http = require("http");
var url = require("url");
var fs = require("fs");
var file = 'site.html';
var https = require("https");
var DOMParser = require('xmldom').DOMParser;

const address = "https://journals.agh.edu.pl/csci/oai?verb=GetRecord&metadataPrefix=oai_dc&identifier="

http.createServer(function (request, response) {
  console.log("--------------------------------------");
  console.log("The relative URL of the current request: " + request.url + "\n");
  var url_parts = url.parse(request.url, true);  // parsing (relative) URL

  //Compare the relative URL
  switch (url_parts.pathname) {

    // if relative URL is '/' then send, to a browser,
    // the contents of a file (an HTML document) - its name contains the 'file' variable
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

    // Process the form content if relative URL is '/submit'
    case '/submit':
        var text = decodeURIComponent(request.url);
        var cutter = text.split('?');
        cutter = cutter[1].split("=");
        let checkUrl = address + cutter[1];
        console.log(checkUrl);
        var result = "";
        https.get(checkUrl, res => {
            res.setEncoding("utf8");
            var body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                // body = JSON.parse(body);
                // var parser = new DOMParser();
                // body = parser.parseFromString(body,"text/xml");
                console.log(typeof(body));
                console.log((body));

                response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                response.write(body);   // Send the content to the web browser
                response.end();
            });
        });

        break;
  } //switch
}).listen(8080);
console.log("The server was started on port 8080");
console.log("To end the server, press 'CTRL + C'");