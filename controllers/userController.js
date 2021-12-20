let User = require('../models/userModel');
let cartController = require('./cartController');

exports.checkSession = function(req,res){
    //si l'utilisateur n'existe pas
    if (!req.session.user){
        cart = cartController.newCart()
        req.session.user = new User(req.session.id)
    }
    res.redirect('/catalog')
}

exports.addName = function(req,res){
    req.session.user.addName(req.body.name)
    res.redirect('/catalog')
}