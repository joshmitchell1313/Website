const path = require("path");
const fs = require("fs");

//books will hold the array of book data parsed from the books json file
var books
const filePath = path.join(__dirname, './../public/data/books.json')
fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    books = JSON.parse(data)
})

module.exports = function(app){

    app.get('/reading', function(req, res){
        res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books});
    });
//Need to sort in teh future
    app.get('/reading/1', function(req, res){
        res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books});
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