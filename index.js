
var express = require('express');
var expressHbs = require('express-handlebars')
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'views')));
app.listen(process.env.PORT || '3002');
app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');
app.get('/', function (request,response) {
    response.render('index');
})