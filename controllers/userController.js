let User = require('../models/userModel');
let cartController = require('./cartController');

let connection = require('../db.js');

exports.checkSession = function(req,res){
    //si l'utilisateur n'existe pas
    if (!req.session.user){
        cart = cartController.newCart()
        req.session.user = new User(req.session.id,cart.formationsId)
    }
    res.redirect('/catalog')
}

exports.login = function(req,res){
    req.session.user.name = req.body.name;
    console.log(req.session.user.name);
    res.redirect('/catalog');
}

exports.subscribe = function(req,res){
    if (req.session.user.name != ''){
        for (i = 0; i < req.session.user.cart.length; i ++){
            console.log((req.session.user.name));
            connection.query(`INSERT INTO subscription (username, formationId) VALUES ('${req.session.user.name}',${req.session.user.cart[i]});`, function(error,result) {
                if (error) console.log(error);
            });
        }
        req.session.user.cart = [];
        res.render('subscribe.ejs');
    }
    else{
        res.render('login.ejs',{source: 'subscribe'});
    }
}