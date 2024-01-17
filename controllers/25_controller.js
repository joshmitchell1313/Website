const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const { data } = require("jquery");


//Create schema
const goalSchema = new mongoose.Schema({
    number: Number,
    goal: String,
    completed: String,
    date: String
});

const Goal = mongoose.model('Goal', goalSchema);

//Try middleware

var urlendcodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/25by25', function(req, res){
        Goal.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/25by25.ejs'), {goals: data});
        });
    });
}