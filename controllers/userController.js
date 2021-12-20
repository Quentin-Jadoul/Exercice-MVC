let User = require('../models/userModel');
let cartController = require('./cartController');

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