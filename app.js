var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port =5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post( , function(req,res){

})

app.listen(port,function(){
    console.log('running on port',port);
    
})