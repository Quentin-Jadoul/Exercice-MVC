let Cart = require('../models/cartModel');
let User = require('../models/userModel');

exports.showCart = function(req,res){
    if (typeof cart == "undefined") {
        cart = new Cart();
    }
    res.render('showCart.ejs', {cart: cart.list});
}

exports.addToCart = function(req,res){
    if (typeof cart == "undefined") {
        cart = new Cart();
    }
    cart.push()
}

exports.newCart = function(req,res){
    cart = new Cart();
    return cart;
}
