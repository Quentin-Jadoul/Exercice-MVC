let Cart = require('../models/cartModel');
let User = require('../models/userModel');

exports.showCart = function(req,res){
    if (typeof cart != "undefined") {
        res.render('showCart.ejs', {cart: cart.list});
    }
    else{
        cart = new Cart();
        
        res.render('showCart.ejs', {cart: cart.list});
    }
}

exports.addToCart = function(req,res){
    cart.push()
}
