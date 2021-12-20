const Cart = require("./cartModel");

class User{
    constructor(id){
        this.id = id;
    }
    //methodes
    addName(name){
        this.name = name;
    }
    addCart(cart){
        this.cart = cart;
    }
    getId(){
        return this.id;
    }
}
module.exports = User;