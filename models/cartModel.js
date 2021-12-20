class Cart {
    constructor(){
        this.list=[];
    }
    //methodes
    add(formation){
        this.list.push(formation);
    }
}
module.exports = Cart;