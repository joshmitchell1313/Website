const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const { data } = require("jquery");


//Create schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    year_published: Number,
    year_read: Number
});

const Book = mongoose.model('Book', bookSchema);

//Try middleware

var urlendcodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/reading', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        });
    });

    app.get('/reading/1', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"title": 1});
    });

    app.get('/reading/2', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"title": -1});
    });

    app.get('/reading/3', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"author": 1});
    });

    app.get('/reading/4', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"author": -1});
    });

    app.get('/reading/5', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"pages": 1});
    });

    app.get('/reading/6', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"pages": -1});
    });

    app.get('/reading/7', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"year_published": 1});
    });

    app.get('/reading/8', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"year_published": -1});
    });

    app.get('/reading/9', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"year_read": 1});
    });

    app.get('/reading/10', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
            res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        }).sort({"year_read": -1});
    });
}