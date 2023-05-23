const fs = require('fs');
const path = require('path');
const myPath  = require('../utils/path');


const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const readDataFromFile = (cb) =>{
    fs.readFile(p, (err,data) => {
        if(!err) {
            return cb(JSON.parse(data));
        }
        return cb([]);
    });
}
module.exports = class Product {
    constructor(t){
        this.title = t;
    }
    addProduct(){
        readDataFromFile((products) =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        })
    }
    static deleteProduct(){
        readDataFromFile((products) =>{
            let prod = [...products];
            prod.splice(0, 1);
            console.log("🚀 ~ file: product.js:32 ~ Product ~ readDataFromFile ~ prod:", prod)
            fs.writeFile(p, JSON.stringify(prod), err => {
                console.log(err);
            });
        })
    }
    static getProducts(cb){
        readDataFromFile(cb);
    }
}