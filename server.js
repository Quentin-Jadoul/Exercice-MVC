//import express
let express = require('express');
let session = require('express-session');
let router = require('./routes');

//initialize the app
let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}));

app.use('/', router)/

//Lauch app to listen to specified port 
app.listen(9000, function () {
    console.log('Running on port 9000');
})
