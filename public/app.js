var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port =5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post( '/input', function(req,res){
    console.log('werkin');
    matherArray.push(req.body);
    res.sendStatus(201);
});
app.get('/input', function(req,res){
    
})
app.listen(port,function(){
    console.log('running on port',port);
    
});

function mathilator(firstNumber,secondNumber){
    if (type == 'adder') {
        firstNumber + secondNumber;
    }else if(type == 'subtractor'){
        firstNumber - secondNumber;
    }else if(type == 'divider'){
        firstNumber / secondNumber;
    }else if(type == 'multiplier'){
        firstNumber * secondNumber;
    
    }
};   