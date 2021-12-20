let User = require('../models/userModel');
let cartController = require('./cartController');

exports.checkSession = function(req,res){
    //si l'utilisateur n'existe pas
    if (!req.session.user){
        cart = cartController.newCart()
        req.session.user = new User(req.session.id)
    }
    res.redirect('/catalog')


    // if (!(usersId.includes(req.session.id))){
    //     usersId.push(req.session.id);
    //     user = new User(req.session.id);
    //     usersList.push(user);
    // }
    // user = getUser(req.session.id);
    // //si le cart n'existe pas
    // if (typeof user.cart == "undefined"){
    //     cart = cartController.newCart()
    //     user.addCart(cart.list);
    // }
    // res.redirect('/catalog');
}

exports.addName = function(req,res){
    console.log(usersList);
    user = getUser(req.session.id);
    user.addName(req.body.name);
    req.session.name = user.name;
    res.redirect('/')
}

getUser = function(id){
    for (i = 0; i < usersList.length; i++ ){
        if (usersList[i].getId() == id.toString()){
            return usersList[i];
        }
    }
}