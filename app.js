var express = require('express');
var home_controller = require('./controllers/home_controller');
var reading_controller = require('./controllers/reading_controller');
var todo_controller = require('./controllers/todo_controller');
var twenty_five_controller = require('./controllers/twenty_five_controller');
var podcast_controller = require('./controllers/podcast_controller');

var path = require('path');
var mongoose = require('mongoose');
const { renderFile } = require('ejs');

var app = express();

app.set('view engine', 'ejs');

//middleware to use the static files
app.use(express.static(path.join(__dirname + '/public')));

//fire controllers
home_controller(app);
reading_controller(app);
todo_controller(app);
twenty_five_controller(app);
podcast_controller(app);

//Connect to the database
mongoose.connect("mongodb+srv://joshmitchell1313:SgvIFXCu0ygcbrdB@joshmitch13website.gnbh9.mongodb.net/?retryWrites=true&w=majority&appName=joshmitch13website");

//Listens to a port
app.listen(3000, function(){
    console.log('I am listening on port 3000, hello world');
});