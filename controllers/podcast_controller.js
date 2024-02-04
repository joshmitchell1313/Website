const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const { data } = require("jquery");

//Try middleware

var urlendcodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/reading', function(req, res){
        let url = "https://api.spotify.com/v1/shows/3uLQxrMZ9xsqj7FcwNaWrR/episodes"
        fetch(url).then((res) => {
            res.json().then((res1) => {
                console.log(res1);
            });
        });
        
    });
}