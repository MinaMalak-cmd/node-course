const products = [];

module.exports = class Product {
    constructor(t){
        this.title = t;
    }
    addProduct(){
        products.push(this);
    }
    static deleteProduct(){
        products.splice(0, 1);
    }
    static getProducts(){
        return products;
    }
}