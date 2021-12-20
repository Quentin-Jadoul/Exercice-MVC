class User{
    constructor(id,cart){
        this.id = id;
        this.cart = cart;
        this.name = '';
    }
    //methodes
    addName(name){
        this.name = name;
    }
    getId(){
        return this.id;
    }
}
module.exports = User;