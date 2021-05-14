var http = require("http");
var url = require("url");
var fs = require("fs");
var file = 'site.html';
const { createCanvas, loadImage } = require("canvas");

const address = "http://worldtimeapi.org/api/timezone/";
let result = "";

function generate_canvas(){
    shape = (Math.floor(Math.random()*3));
    x_start = (Math.ceil(Math.random()*1000));
    y_start = (Math.ceil(Math.random()*1000));
    length = (Math.ceil(Math.random()*300)); 
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var params = {"shape":shape, "x_start":x_start, "y_start":y_start, "len":length, "color":randomColor};
    return JSON.stringify(params);
    // var canvas = createCanvas(length, length);
    // var context = canvas.getContext('2d');
    // if (shape == 0){//square
    //     context.beginPath();
    //     context.rect(x_start, y_start, length, length);
    //     context.fillStyle = color;
    //     context.fill();
    // }
    // else if (shape == 1){//circle
    //     ctx.beginPath();
    //     ctx.arc(x_start, y_start, length, 0, 2 * Math.PI);
    //     ctx.stroke();
    // }
    // else{
    //     context.beginPath();
    //     context.moveTo(x_start, y_start);
    //     context.lineTo(x_start, y_start - length);
    //     context.lineTo(x_start+length, y_start-length);
    //     context.closePath();
    //     context.fillStyle = randomColor;
    //     context.fill();
    // }
    // return canvas;
}


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
        let numberOfDrawings = parseInt(cutter[1]);
        // var drawings = html.
        for(var i=0;i<numberOfDrawings;i++){
            var params = generate_canvas();
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(params);   // Send the content to the web browser
            response.end();
        break;
        }
  } //switch
}).listen(8080);
console.log("The server was started on port 8080");
console.log("To end the server, press 'CTRL + C'");