var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;

// Calcuations
function calculate(numberOne, numberTwo, operation) {
    if (operation === "add") {
        return numberOne + numberTwo;
    } else if (operation === "subtract") {
        return numberOne - numberTwo;
    } else if (operation === "multiply") {
        return numberOne * numberTwo;
    } else if (operation === "divide") {
        return numberOne / numberTwo;
    } else {
        console.log('no operation selected!');
        return;
    }
}

// Express
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/input', function(req, res) {
    var x = parseInt(req.body.x, 10);
    var y = parseInt(req.body.y, 10);
    var operation = req.body.operation;
    var data = {
        operation: operation,
        result: calculate(x, y, operation)
    };
    
    res.send(data);
});

app.listen(port, function() {
    console.log('listening on port', port);
});