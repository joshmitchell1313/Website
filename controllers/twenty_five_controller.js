const path = require("path");
const fs = require("fs")

//will hold an array of all goals data
var goals
const filePath = path.join(__dirname, './../public/data/goals.json')
fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    goals = JSON.parse(data)
    console.log(goals[1].title)
})

module.exports = function(app){
    app.get('/25by25', function(req, res){
        res.render(path.join(__dirname, '..', '/public/html/25by25.ejs'), {goals});
    });
}