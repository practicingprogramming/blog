var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));
app.use(express.static('js'));
app.use(express.static('css'));
app.listen(8080);
console.log('App listening on port 8080');
