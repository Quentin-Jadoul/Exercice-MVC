let Cart = require('../models/cartModel');
let User = require('../models/userModel');

exports.showCart = function(req,res){
    res.render('showCart.ejs', {cart: cart.list});
}

exports.addToCart = function(req,res){
    if (!req.session.user.cart.includes(req.params.id)){
        req.session.user.cart.push(req.params.id);
    }
    console.log(req.session.user.cart);
    res.redirect('/catalog');
}

exports.newCart = function(req,res){
    cart = new Cart();
    return cart;
}
