const fs = require('fs');
const path = require('path');
const myPath  = require('../utils/path');

const products = [];

module.exports = class Product {
    constructor(t){
        this.title = t;
    }
    addProduct(){
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
        fs.readFile(p, (err, data)=>{
            let products = [];
            if(!err) {
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }
    static deleteProduct(){
        products.splice(0, 1);
    }
    static getProducts(){
        return products;
    }
}