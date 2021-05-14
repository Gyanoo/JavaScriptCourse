// No use of any template system
var express = require('express'),
    logger = require('morgan');
var app = express();
var x = 1;
var y = 2;

var fs = require('fs');

function calculate(path) {
    var data = JSON.parse(fs.readFileSync(path));
    var result = [];
    var i = 0;
    for (i=0;i<data.to_calculate.length;i++){
        var first = data.to_calculate[i].first;
        var second = data.to_calculate[i].second;
        var operator = data.to_calculate[i].operator;
        if(operator == "*")
            result.push(first + ' * ' + second + ' = ' + first*second);
        if(operator == "/")
            result.push(' ' + first + ' / ' + second + ' = ' + first/second);
        if(operator == "+")
            result.push(' ' + first + ' + ' + second + ' = ' + parseInt(first+second));
        if(operator == "-")
            result.push(' ' + first + ' - ' + second + ' = ' + parseInt(first-second));
    }
    return result;
}

// Determining the contents of the middleware stack
app.use(logger('dev'));                         // Place an HTTP request recorder on the stack — each request will be logged in the console in 'dev' format
app.use(express.static(__dirname + '/public')); // Place the built-in middleware 'express.static' — static content (files .css, .js, .jpg, etc.) will be provided from the 'public' directory

// Route definitions
app.get('/calc/:path', function (req, res) {     // The first route
    // res.send('<h1>' + x + ' + ' + y + ' = ' + (x+y) + '</h1>') // Send a response to the browser
    res.send('<div>' + calculate(req.params.path) + '</div>')
})

app.get('/', function (req, res) {     // The first route
    res.send('<h1>Hello World!</h1>'); // Send a response to the browser
})

// The application is to listen on port number 3000
app.listen(3000, function () {
    console.log('The application is available on port 3000');
});