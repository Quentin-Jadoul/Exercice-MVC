let Cart = require('../models/cartModel');

let connection = require('../db.js');

exports.showCart = function(req,res){
    if (req.session.user.cart.length != 0){
        connection.query(`select * from formation WHERE idformation IN (${req.session.user.cart});`, function(error,result) {
            if (error) console.log(error);
            console.log(result);
            res.render('showCart.ejs', {cart: result});
        });
    }
    else{
        res.render('showCart.ejs', {cart: []});
    }
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

exports.deleteItem = function(req,res){
    index = req.session.user.cart.indexOf(req.params.id);
    req.session.user.cart.splice(index, 1);
    res.redirect('/showCart')
}